import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { Entypo } from '@expo/vector-icons';
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
            borderColor: '#5BD5FF77',
            borderTopWidth: scale(5),
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-between',
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
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Entypo name='facebook' size={scale(20)} color='white' />
              <Text
                style={{
                  fontFamily: 'bold',
                  marginHorizontal: scale(5),
                  fontSize: scale(12),
                  color: 'white'
                }}
              >
                Disnav Peraksby
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Entypo name='twitter' size={scale(20)} color='white' />
              <Text
                style={{
                  fontFamily: 'bold',
                  marginHorizontal: scale(5),
                  fontSize: scale(12),
                  color: 'white'
                }}
              >
                Disnav Peraksby
              </Text>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Entypo name='instagram' size={scale(20)} color='white' />
              <Text
                style={{
                  fontFamily: 'bold',
                  marginLeft: scale(5),
                  marginRight: scale(15),
                  fontSize: scale(12),
                  color: 'white'
                }}
              >
                Disnav Peraksby
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
