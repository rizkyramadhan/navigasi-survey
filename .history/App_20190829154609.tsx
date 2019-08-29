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
      <View style={{ position: 'absolute', right: 20, top: 20 }}>
        <Image
          source={logoImg}
          style={{ width: 80, height: 80 }}
          resizeMode='contain'
        />
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
              home: (
                <>
                  <View style={{ marginBottom: scale(15) }}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'semibold',
                        fontSize: scale(25),
                        marginBottom: scale(5),
                        textAlign: 'center'
                      }}
                    >
                      {meta.sapa.id}!
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'ibold',
                        fontSize: scale(10),
                        marginBottom: scale(15),
                        textAlign: 'center'
                      }}
                    >
                      {meta.sapa.en}!
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'bold',
                        fontSize: scale(22),
                        marginBottom: scale(10),
                        textAlign: 'center'
                      }}
                    >
                      Mohon Nilai Pelayanan VTS Kami
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'ibold',
                        fontSize: scale(15),
                        textAlign: 'center'
                      }}
                    >
                      Please rate our VTS service
                    </Text>
                  </View>
                  {meta.current >= 0 ? null : <Pilihan meta={meta} />}
                </>
              ),
              chart: null
            }[meta.page]
          }
        </View>
        <View style={{ flexBasis: scale(30), backgroundColor: 'red' }}>
          <Footer />
        </View>
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({});
