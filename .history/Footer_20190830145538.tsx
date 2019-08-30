import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';

const bg = require(`./assets/imgs/line.png`);
export default ({ meta }: any) => {
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
            justifyContent: 'space-between',
            paddingHorizontal: scale(4)
          }}
        >
          <TouchableOpacity
            onPress={() => {
              meta.page = 'chart';
            }}
          >
            <Text
              style={{
                fontFamily: 'isemibold',
                fontSize: scale(15),
                color: '#fff'
              }}
            >
              DISTRIK NAVIGASI KELAS I SURABAYA
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Entypo name='facebook' size={scale(20)} color='white' />
              <Text
                style={{
                  fontFamily: 'bold',
                  marginLeft: scale(2),
                  marginRight: scale(15),
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
                  marginLeft: scale(2),
                  marginRight: scale(15),
                  fontSize: scale(12),
                  color: 'white'
                }}
              >
                @disnav_sby
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Entypo name='instagram' size={scale(20)} color='white' />
              <Text
                style={{
                  fontFamily: 'bold',
                  marginLeft: scale(2),
                  marginRight: scale(15),
                  fontSize: scale(12),
                  color: 'white'
                }}
              >
                disnavsurabaya
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
