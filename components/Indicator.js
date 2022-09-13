import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
// день в миллисекундах
const dayMS = 86400000;

export default function Indicator({ task, myDaysApprove }) {
  // дата сейчас
  const now = new Date();
  // времени на проверку в милисекундах
  const myDaysApproveMS = myDaysApprove * dayMS;

  const SCREEN_WIDTH = Dimensions.get('window').width - 144;
  var width = SCREEN_WIDTH;
  var text = '';
  var backgroundColor = '';

  if (!(task?.inCheking === undefined || task?.inCheking === '')) {
    // Дата отправки на проверку
    // выделим компоненты даты '03.09.2022 18:39:43',
    const year = Number(task?.inCheking.substr(6, 4));
    const month = Number(task?.inCheking.substr(3, 2)) - 1;
    const day = Number(task?.inCheking.substr(0, 2));
    const hour = Number(task?.inCheking.substr(11, 2));
    const min = Number(task?.inCheking.substr(14, 2));
    const sec = Number(task?.inCheking.substr(17, 2));

    const dateInCheking = new Date(year, month, day, hour, min, sec, 0);

    // времени прошло на проверку  в милисекундах
    const timeRunOff = Math.abs(now.getTime() - dateInCheking.getTime());

    if (timeRunOff >= myDaysApproveMS) {
      (backgroundColor = '#F45B44'), (text = 'Задача принята автоматически');
      width = SCREEN_WIDTH;
    } else {
      // сколько процентов времени утекло
      const procentTime = (timeRunOff / myDaysApproveMS) * 100;
      if (procentTime <= 20) {
        backgroundColor = '#8CD478';
      } else if (procentTime <= 40) {
        backgroundColor = '#BAD478';
      } else if (procentTime <= 60) {
        backgroundColor = '#D4C078';
      } else if (procentTime <= 80) {
        backgroundColor = '#F45B44';
      }
      text = 'Прошло ' + Math.round(procentTime) + '% времени';
      width = SCREEN_WIDTH - (SCREEN_WIDTH * procentTime) / 100;
    }
  }

  return (
    <View
      style={{
        backgroundColor: {backgroundColor},
        width: width,
      }}>
      <Text
        style={{ fontSize: 10, alignSelf: 'flex-start', borderColor: 'black' }}>
        {text}
      </Text>
    </View>
  );
}
