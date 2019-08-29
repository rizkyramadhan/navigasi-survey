import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

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
                marginHorizontal: 5
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
                  marginHorizontal: scale(2),
                  height: scale(80)
                }}
              />
              <Text>{text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ marginTop: 50 }}>
        <Button
          color='#aaa'
          title='Hasil aspirasi'
          onPress={() => {
            meta.page = 'chart';
          }}
        />
      </View>
    </>
  );
};
