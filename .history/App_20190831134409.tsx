import * as Font from 'expo-font';
import { observer, useObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { scale } from 'react-native-size-matters';
import Footer from './Footer';
import Pilihan from './Pilihan';
import Thanks from './Thanks';
import Chart from './Chart';

const logoImg = require(`./assets/imgs/logo.png`);
const bg = require(`./assets/imgs/bg2.png`);

export default observer(() => {
  const meta = useObservable({
    current: -1,
    timer: 0,
    hour: 0,
    loading: true,
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
    const loadFont = async () => {
      Font.loadAsync({
        bold: require('./assets/fonts/AsapCondensed-Bold.ttf'),
        semibold: require('./assets/fonts/AsapCondensed-Medium.ttf'),
        regular: require('./assets/fonts/AsapCondensed-Regular.ttf'),
        ibold: require('./assets/fonts/AsapCondensed-BoldItalic.ttf'),
        isemibold: require('./assets/fonts/AsapCondensed-MediumItalic.ttf'),
        iregular: require('./assets/fonts/AsapCondensed-RegularItalic.ttf')
      });

      meta.loading = false;
    };
  }, []);

  return (
    <ImageBackground resizeMode='cover' source={bg} style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          right: 20,
          top: 20,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Image
          source={logoImg}
          style={{ width: scale(30), height: scale(30) }}
          resizeMode='contain'
        />
        <View
          style={{
            justifyContent: 'flex-end',
            marginTop: scale(-3),
            marginLeft: scale(6)
          }}
        >
          <Text
            style={{
              fontFamily: 'semibold',
              color: 'white',
              fontSize: scale(10)
            }}
          >
            KEMENTERIAN PERHUBUNGAN
          </Text>
          <Text
            style={{
              fontFamily: 'semibold',
              color: 'white',
              fontSize: scale(8)
            }}
          >
            DIREKTORAT JENDERAL PERHUBUNGAN LAUT
          </Text>

          <Text
            style={{
              paddingTop: scale(2),
              fontFamily: 'semibold',
              color: 'white',
              fontSize: scale(7)
            }}
          >
            DISTRIK NAVIGASI KELAS I SURABAYA
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
              home:
                meta.current >= 0 ? (
                  <Thanks meta={meta} />
                ) : (
                  <Pilihan meta={meta} />
                ),
              chart: <Chart meta={meta} />
            }[meta.page]
          }
        </View>
        <View style={{ flexBasis: scale(80) }}>
          <Footer meta={meta} />
        </View>
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({});
