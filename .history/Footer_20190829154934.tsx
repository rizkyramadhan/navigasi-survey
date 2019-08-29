import { View, Text } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default () => {
  return (
    <View
      style={{
        backgroundColor: '#305DAE',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(4)
      }}
    >
      <Text style={{ fontFamily: 'regular', fontSize: scale(15), color: '#fff' }}>
        Distrik Navigasi Kelas 1 - Surabaya
      </Text>
    </View>
  );
};
