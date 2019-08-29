import { View, Text } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default () => {
  return (
    <View style={{ backgroundColor: 'red', flex: 1, flexDirection: 'row' }}>
      <Text style={{ fontFamily: 'regular', fontSize: scale(15) }}>
        Distrik Navigasi Kelas 1 - Surabaya
      </Text>
    </View>
  );
};
