import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Button
} from 'react-native';
import { BarChart, XAxis, Grid } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import { observer, useObservable } from 'mobx-react-lite';
const icons = [
  require(`./assets/imgs/1.png`),
  require(`./assets/imgs/2.png`),
  require(`./assets/imgs/3.png`),
  require(`./assets/imgs/4.png`)
];

const logoImg = require(`./assets/imgs/logo.png`);
const bg = require(`./assets/imgs/bg2.png`);

export default observer(() => {
  const pilihan = ['Tidak Puas', 'Cukup Puas', 'Puas', 'Sangat Puas'];
  const meta = useObservable({
    current: -1,
    lokasi: 'Surabaya',
    timer: 0,
    page: 'home'
  });
  
  return (
    <ImageBackground resizeMode="cover" source={bg} style={{ flex: 1 }}>
      <View style={styles.container}>
        {
          {
            home: (
              <>
                <View style={styles.logoContainer}>
                  <Image
                    source={logoImg}
                    style={styles.logoImg}
                    resizeMode='contain'
                  />
                  <Text style={styles.logoText}>
                    Distrik Navigasi - {meta.lokasi}
                  </Text>
                </View>
                {meta.current >= 0 ? suksesEl : pilihanEl}
              </>
            ),
            chart: chartEl
          }[meta.page]
        }
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  logoContainer: { marginBottom: 70 },
  logoText: { fontSize: 24 },
  logoImg: { width: '100%', height: '80px' },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    marginHorizontal: 5
  },
  icon: {
    marginBottom: 10,
    width: 50,
    height: 50
  },
  iconBig: {
    marginBottom: 10,
    width: 100,
    height: 100
  },
  textBig: {
    textAlign: 'center',
    fontSize: 17
  }
});
