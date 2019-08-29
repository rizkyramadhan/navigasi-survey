import { View, Text, Image } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const lineImg = require(`./assets/imgs/line.png`);
export default () => {
  return (
    <View
      style={{ flex: 1, marginTop: scale(10), justifyContent: 'space-between' }}
    >
      <View style={{ flexDirection: 'row-reverse' }}>
        <Image
          source={lineImg}
          style={{ width: scale(300), height: scale(30) }}
          resizeMode='contain'
        />
      </View>
      <View
        style={{
          backgroundColor: '#305DAE',
          borderColor: '#40ACDA',
          borderTopWidth: scale(5),
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: scale(4)
        }}
      >
        <Text
          style={{ fontFamily: 'regular', fontSize: scale(15), color: '#fff' }}
        >
          Distrik Navigasi Kelas 1 - Surabaya
        </Text>
      </View>
    </View>
  );
};
