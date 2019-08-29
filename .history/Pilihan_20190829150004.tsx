import React from 'react';
import { View } from 'react-native';

export default () => {
  return (
    <>
      <View style={styles.body}>
        {pilihan.map((text, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              style={styles.button}
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
              <Image source={icons[idx]} style={styles.icon} />
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
