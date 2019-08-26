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
const bg = require(`./assets/imgs/bg.jpg`);

export default observer(() => {
  const pilihan = ['Tidak Puas', 'Cukup Puas', 'Puas', 'Sangat Puas'];
  const warna = ['red', 'orange', 'blue', 'green'];
  const meta = useObservable({
    current: -1,
    lokasi: 'Surabaya',
    timer: 0,
    page: 'home'
  });

  const pilihanEl = (
    <>
      <View style={{ marginBottom: 30, alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 30,
            color: 'yellow',
            marginVertical: 30
          }}
        >
          Puaskah Anda dengan pelayanan di kantor Kami ?
        </Text>
      </View>
      <View style={styles.body}>
        {pilihan.map((text, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              style={[
                styles.button,
                { backgroundColor: warna[idx], padding: 15, borderRadius: 7 }
              ]}
              onPress={() => {
                meta.current = idx;
                meta.timer = 100;
                const timer = setInterval(() => {
                  meta.timer -= 5;
                  if (meta.timer <= 0) {
                    meta.current = -1;
                    clearInterval(timer);
                  }
                }, 200);
              }}
            >
              <Image source={icons[idx]} style={styles.icon} />
              <Text style={{ color: 'yellow', fontSize: 20 }}>{text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ marginTop: 50 }}>
        <Button
          color='#aaa'
          title='Hasil aspirasi'
          onPress={() => {
            meta.page = 'chart';
          }}
        />
      </View>
    </>
  );

  const suksesEl = (
    <>
      <View style={{ marginBottom: 30, alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 30,
            color: 'yellow',
            marginVertical: 30
          }}
        >
          Terima Kasih atas Aspirasi Anda
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: warna[meta.current],
          padding: 15,
          width: 200,
          borderRadius: 8,
          alignItems: 'center'
        }}
      >
        <Image source={icons[meta.current]} style={styles.iconBig} />
        <Text style={styles.textBig}>{pilihan[meta.current]}</Text>
        <View
          style={{
            width: `${(meta.timer / 100) * 100}%`,
            borderBottomWidth: 2,
            borderBottomColor: 'yellow',
            marginTop: 30
          }}
        />
      </View>
    </>
  );

  const data = [14, 80, 100, 55];
  const chartEl = (
    <>
      <Text style={styles.logoText}>Bulan Agustus 2019</Text>
      <View style={{ height: 200, padding: 20, width: '50%', marginTop: 50 }}>
        <BarChart
          style={{ flex: 1 }}
          data={data}
          gridMin={0}
          svg={{ fill: 'rgb(134, 65, 244)' }}
        >
          <Grid />
        </BarChart>
        <XAxis
          style={{ marginTop: 10 }}
          data={data}
          scale={scale.scaleBand}
          formatLabel={(value, index) => index + 1}
          labelStyle={{
            color: 'red',
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif'
          }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          color='#aaa'
          title='Kembali'
          onPress={() => {
            meta.page = 'home';
          }}
        />
      </View>
    </>
  );

  return (
    <ImageBackground resizeMode='cover' source={bg} style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: 'black',
          borderBottomColor: 'yellow',
          borderBottomWidth: 2,
          flexDirection: 'row',
          alignItems: 'stretch'
        }}
      >
        <Image
          source={logoImg}
          style={{ width: 60, height: 60, margin: 20 }}
          resizeMode='contain'
        />
        <View
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
        >
          <Text style={{ color: 'white', fontSize: 27, fontWeight: 'bold' }}>
            Distrik Navigasi - Departemen Perhubungan
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 10,
              fontWeight: 'bold'
            }}
          >
            PEMERINTAH KOTA {meta.lokasi.toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        {
          {
            home: <>{meta.current >= 0 ? suksesEl : pilihanEl}</>,
            chart: chartEl
          }[meta.page]
        }
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  logoText: { fontSize: 24 },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    marginHorizontal: 5
  },
  icon: {
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
    width: 100,
    height: 100
  },
  iconBig: {
    marginBottom: 10,
    width: 100,
    height: 100
  },
  textBig: {
    textAlign: 'center',
    fontSize: 17,
    color: 'yellow'
  }
});
