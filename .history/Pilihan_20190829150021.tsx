import React from 'react';
import { View } from 'react-native';

export default () => {
  const pilihan = ['Tidak Puas', 'Cukup Puas', 'Puas', 'Sangat Puas'];

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

const styles = StyleSheet.create({
  logoContainer: { marginBottom: 70 },
  logoText: { fontSize: 24 },
  logoImg: { width: '100%', height: '80px' },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    marginHorizontal: 5
  },
  icon: {
    marginBottom: 10,
    width: 50,
    height: 50
  },
  iconBig: {
    marginBottom: 10,
    width: 100,
    height: 100
  },
  textBig: {
    textAlign: 'center',
    fontSize: 17
  }
});
