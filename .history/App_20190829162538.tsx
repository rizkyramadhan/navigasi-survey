import { observer, useObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Pilihan from './Pilihan';
import Footer from './Footer';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const logoImg = require(`./assets/imgs/logo.png`);
const bg = require(`./assets/imgs/bg2.png`);

export default observer(() => {
  const meta = useObservable({
    current: -1,
    hour: 0,
    sapa: {
      id: 'Selamat Pagi',
      en: 'Good Morning'
    },
    page: 'home'
  });

  useEffect(() => {
    setTimeout(() => {
      var date = new Date();
      meta.hour = date.getHours();

      if (meta.hour > 0 && meta.hour <= 10) {
        meta.sapa.id = 'Selamat Pagi';
        meta.sapa.en = 'Good Morning';
      } else if (meta.hour > 10 && meta.hour <= 14) {
        meta.sapa.id = 'Selamat Siang';
        meta.sapa.en = 'Good Afternoon';
      } else if (meta.hour > 14 && meta.hour <= 18) {
        meta.sapa.id = 'Selamat Sore';
        meta.sapa.en = 'Good Afternoon';
      } else {
        meta.sapa.id = 'Selamat Malam';
        meta.sapa.en = 'Good Night';
      }
    }, 1000);

    Font.loadAsync({
      bold: require('./assets/fonts/AsapCondensed-Bold.ttf'),
      semibold: require('./assets/fonts/AsapCondensed-Medium.ttf'),
      regular: require('./assets/fonts/AsapCondensed-Regular.ttf'),
      ibold: require('./assets/fonts/AsapCondensed-BoldItalic.ttf'),
      isemibold: require('./assets/fonts/AsapCondensed-MediumItalic.ttf'),
      iregular: require('./assets/fonts/AsapCondensed-RegularItalic.ttf')
    });
  }, []);

  return (
    <ImageBackground resizeMode='cover' source={bg} style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          right: 20,
          top: 20,
          flexDirection: 'row-reverse',
          alignItems: 'center'
        }}
      >
        <Image
          source={logoImg}
          style={{ width: 80, height: 80 }}
          resizeMode='contain'
        />
        <View style={{ justifyContent: 'flex-end' }}>
          <Text
            style={{
              fontFamily: 'semibold',
              color: 'white',
              textAlign: 'right',
              fontSize: scale(12)
            }}
          >
            Kementrian Perhubungan
          </Text>
          <Text
            style={{
              fontFamily: 'bold',
              color: 'white',
              textAlign: 'right',
              fontSize: scale(8)
            }}
          >
            Direktorat Jendral Perhubungan Laut
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'space-between'
        }}
      >
        <View style={{ flex: 1, marginTop: scale(25) }}>
          {
            {
              home: meta.current >= 0 ? null : <Pilihan meta={meta} />,
              chart: null
            }[meta.page]
          }
        </View>
        <View style={{ flexBasis: scale(80) }}>
          <Footer />
        </View>
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({});
