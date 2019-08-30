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
      <View style={{ marginBottom: scale(25), marginTop: scale(35) }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'bold',
            fontSize: scale(18),
            marginBottom: scale(5),
            textAlign: 'center'
          }}
        >
          Terima kasih atas partisipasi Anda!
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'isemibold',
            fontSize: scale(14),
            marginBottom: scale(15),
            textAlign: 'center'
          }}
        >
          Thank you for your participation!
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            source={icons[meta.current]}
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
            {pilihan[meta.current]}
          </Text>
        </View>
        <View style={{ width: scale(meta.timer), borderBottomWidth: 3 }} />
      </View>
    </>
  );
};
