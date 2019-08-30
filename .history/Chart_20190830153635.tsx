import React, { useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { BarChart, ProgressChart } from 'react-native-chart-kit';
import { scale } from 'react-native-size-matters';
import { observer, useObservable } from 'mobx-react-lite';
import Axios from 'axios';
import dayjs from 'dayjs';

export default observer(({ meta }: any) => {
  const state = useObservable({
    bulan: 0,
    cpass: '',
    data: []
  });
  const day = dayjs();
  const data = {
    labels: ['Tidak Puas', 'Cukup Puas', 'Puas', 'Sangat Puas'].reverse(),
    data: state.data
  };

  useEffect(() => {
    Axios.get(`https://dashpier.rx.plansys.co/navigasi-chart`, {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    }).then(res => {
      const cmonth = dayjs().month();
      const chart = [0, 0, 0, 0];
      let max = 0;
      res.data.forEach(item => {
        const d = dayjs(item.tstamp);
        if (d.month() === cmonth) {
          chart[item.vote * 1] = item.count * 1;
          max = Math.max(max, item.count * 1);
        }
      });
      state.data = chart.reverse();
    });
  }, [meta.page]);

  if (!state.showchart) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            fontFamily: 'bold',
            fontSize: scale(10),
            color: 'white',
            marginBottom: scale(10)
          }}
        >
          Password:
        </Text>
        <TextInput
          style={{
            fontSize: scale(14),
            marginBottom: scale(10),
            backgroundColor: 'white',
            padding: scale(3),
            borderRadius: 4
          }}
          secureTextEntry={true}
          onChangeText={text => {
            state.cpass = text;
          }}
        />
        <Button
          title='Submit'
          onPress={() => {
            if (state.cpass === '123456') {
              state.showchart = true;
            }
          }}
        />
      </View>
    );
  }

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
        {day.format('MMMM YYYY')}
      </Text>
      <BarChart
        data={{
          labels: data.labels,
          datasets: [
            {
              data: data.data,
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }
          ]
        }}
        yAxisLabel={''}
        width={scale(400)}
        height={scale(200)}
        chartConfig={{
          backgroundGradientFrom: 'transparent',
          backgroundGradientTo: 'transparent',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
      />
    </View>
  );
});
