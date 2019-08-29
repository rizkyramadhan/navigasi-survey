import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const bg = require(`./assets/imgs/line.png`);
export default () => {
  return (
    <ImageBackground resizeMode='stretch' source={bg} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          marginTop: scale(10),
          justifyContent: 'space-between',
          alignItems: 'stretch'
        }}
      >
        <View style={{ flexBasis: scale(30) }}></View>
        <View
          style={{
            backgroundColor: '#305DAE55',
            borderColor: '#5BD5FF33',
            borderTopWidth: scale(5),
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: scale(4)
          }}
        >
          <Text
            style={{
              fontFamily: 'regular',
              fontSize: scale(15),
              color: '#fff'
            }}
          >
            Distrik Navigasi Kelas 1 - Surabaya
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
