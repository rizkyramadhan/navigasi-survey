import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { scale } from 'react-native-size-matters';
import { observer, useObservable } from 'mobx-react-lite';

export default observer(({ meta }: any) => {
  const state = useObservable({
    bulan: 0,
    data: []
  });
  const line = {
    labels: ['Tidak Puas', 'Cukup Puas', 'Puas', 'Sangat Puas'],
    datasets: [
      {
        data: state.data,
        strokeWidth: 2
      }
    ]
  };

  useEffect(() => {
      
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{
          fontFamily: 'bold',
          fontSize: scale(25),
          color: 'white',
          marginBottom: scale(10)
        }}
      >
        Bulan
      </Text>
      <BarChart
        data={line}
        width={scale(400)}
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientFrom: 'transparent',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 0,
            fontSize: scale(20)
          }
        }}
        style={{
          marginVertical: 8,
          backgroundColor: 'transparent',
          borderRadius: 5
        }}
      />
    </View>
  );
});
