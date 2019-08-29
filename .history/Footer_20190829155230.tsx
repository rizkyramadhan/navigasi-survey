import { View, Text } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default () => {
  return (
    <View style={{ justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row-reverse' }}>
        <View
          style={{
            backgroundColor: '#305DAE',
            borderColor: '#40ACDA',
            height: scale(25)
          }}
        ></View>
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
