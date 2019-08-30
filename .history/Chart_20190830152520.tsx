import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { BarChart, ProgressChart } from 'react-native-chart-kit';
import { scale } from 'react-native-size-matters';
import { observer, useObservable } from 'mobx-react-lite';
import Axios from 'axios';
import dayjs from 'dayjs';

export default observer(({ meta }: any) => {
  const state = useObservable({
    bulan: 0,
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
      res.data.forEach(item => {
        const d = dayjs(item.tstamp);
        if (d.month() === cmonth) {
          chart[item.vote * 1] = item.count * 1;
        }
      });
      state.data = chart.reverse();
    });
  }, [meta.page]);

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
      <ProgressChart
        data={data as any}
        width={scale(400)}
        height={scale(300)}
        chartConfig={{
          backgroundGradientFrom: 'transparent',
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
