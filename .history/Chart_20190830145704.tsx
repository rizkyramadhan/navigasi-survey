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
      <Text style={{ fontFamily: 'bold', fontSize: scale(25), color: 'white' }}>
        Bezier Line Chart
      </Text>
      <BarChart
        data={line}
        width={scale(400)}
        height={220}
        yAxisLabel={'$'}
      />
    </View>
  );
};
