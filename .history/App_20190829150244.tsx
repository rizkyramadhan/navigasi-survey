import { observer, useObservable } from 'mobx-react-lite';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Pilihan from './Pilihan';
const logoImg = require(`./assets/imgs/logo.png`);
const bg = require(`./assets/imgs/bg2.png`);

export default observer(() => {
  const meta = useObservable({
    current: -1,
    lokasi: 'Surabaya',
    timer: 0,
    page: 'home'
  });

  return (
    <ImageBackground resizeMode='cover' source={bg} style={{ flex: 1 }}>
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
                  <Image
                    source={logoImg}
                    style={{ width: '100%', height: '80px' }}
                    resizeMode='contain'
                  />
                  <Text style={styles.logoText}>
                    Distrik Navigasi - {meta.lokasi}
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
