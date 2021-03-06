import React from 'react';
import { View, Text } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { scale } from 'react-native-size-matters';

export default ({ meta }: any) => {
  const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2 // optional
      }
    ]
  };
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
            fontFamily: 'bold',
            fontSize: scale(20)
          }
        }}
        style={{
          marginVertical: 8,
          fontFamily: 'bold',
          backgroundColor: 'transparent',
          borderRadius: 5
        }}
      />
    </View>
  );
};
