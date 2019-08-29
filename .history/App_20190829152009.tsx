import { observer, useObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Pilihan from './Pilihan';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const logoImg = require(`./assets/imgs/logo.png`);
const bg = require(`./assets/imgs/bg2.png`);

export default observer(() => {
  const meta = useObservable({
    current: -1,
    hour: 0,
    page: 'home'
  });

  useEffect(() => {
    setTimeout(() => {
      var date = new Date();
      meta.hour = date.getHours();
    }, 1000);

    Font.loadAsync({
      bold: require('./assets/fonts/AsapCondensed-Bold.ttf'),
      semibold: require('./assets/fonts/AsapCondensed-Medium.ttf'),
      regular: require('./assets/fonts/AsapCondensed-Regular.ttf')
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
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {
          {
            home: (
              <>
                <View style={{ marginBottom: 70 }}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'semibold',
                      fontSize: scale(25)
                    }}
                  >
                    Selamat Sore - {meta.hour}
                  </Text>
                </View>
                {meta.current >= 0 ? null : Pilihan}
              </>
            ),
            chart: null
          }[meta.page]
        }
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({});
