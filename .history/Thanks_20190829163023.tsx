import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';

const icons = [
  require(`./assets/imgs/1.png`),
  require(`./assets/imgs/2.png`),
  require(`./assets/imgs/3.png`),
  require(`./assets/imgs/4.png`)
];

export default ({ meta }: any) => {
  const pilihan = ['Tidak Puas', 'Cukup Puas', 'Puas', 'Sangat Puas'];

  return (
    <>
      <View style={{ marginBottom: scale(25) }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'semibold',
            fontSize: scale(25),
            marginBottom: scale(5),
            textAlign: 'center'
          }}
        >
          Terima kasih atas partisipasi Anda!
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {pilihan.map((text, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              style={{
                alignItems: 'center',
                marginHorizontal: scale(10)
              }}
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
              <Image
                source={icons[idx]}
                style={{
                  width: scale(80),
                  height: scale(80)
                }}
              />
              <Text
                style={{
                  marginTop: scale(10),
                  fontSize: scale(15),
                  fontFamily: 'bold',
                  color: 'white'
                }}
              >
                {text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};
