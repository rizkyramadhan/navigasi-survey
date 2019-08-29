import { View } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default () => {
  return (
    <View style={{ backgroundColor: '#305DAE', height: scale(10) }}></View>
  );
};
