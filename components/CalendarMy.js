import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

var countClick = 0;
var startDate = undefined;
var endDate = undefined;

export default function CalendarMy({ dataStart, dataFinish, expanded }) {
  const [markedDates, setmarkedDates] = useState({});
  dataStart = {startDate};
  dataFinish = {endDate};
  // переменные отметки дат
  // 0- дата не выбрана, 1- старт, 2 финиш
  // var markedDates={
  //         '2022-08-21': { startingDay: true, color: 'green' },
  //         '2022-08-22': { color: 'green' },
  //         '2022-08-23': {endingDay: true, color: 'green',},
  //       }

  return (
    <View style={[styles.buttonUp,{ 
      flex: 1, 
      marginTop:5,marginBottom:5,
      padding:5}]}>
      <Text> 
        {'Период: c '
          .concat(
            startDate == undefined
              ? '-'
              : startDate?.toISOString().substr(0, 10)
          )
          .concat(' по ')
          .concat(
            endDate == undefined ? '-' : endDate?.toISOString().substr(0, 10)
          )}
      </Text>
      {expanded && (
        <Calendar style={{margin:5, padding:5 }}
          markingType={'period'}
          markedDates={markedDates}
          maxDate={Date()}
          onDayPress={(day) => {
            var curentDay = new Date(
              day.year,
              day.month - 1,
              day.day + 1,
              0,
              0,
              0,
              0
            );
            if (countClick == 0) {
              countClick = 1;
              startDate = new Date(curentDay.getTime());
              endDate = new Date(curentDay.getTime());
            } else if (countClick == 1 && startDate <= curentDay) {
              countClick = 2;
              endDate = new Date(curentDay.getTime());
            } else if (countClick == 1 && startDate > curentDay) {
              countClick = 2;
              endDate = new Date(startDate.getTime());
              startDate = new Date(curentDay.getTime());
            } else if (countClick == 2) {
              countClick = 0;
              endDate = undefined;
              startDate = undefined;
            }
            var markedDatesCur = {};
            // перебираю все даты чтобы паотом установить им маркировку

            if (startDate != undefined && endDate != undefined) {
              curentDay = new Date(startDate.getTime());
              //  console.log('startDate',startDate);
              // console.log('curentDay',curentDay);
              //  console.log('endDate',endDate);
              // console.log(((startDate != undefined) && (endDate != undefined)));

              do {
                markedDatesCur[curentDay.toISOString().substr(0, 10)] = {
                  color: 'green',
                };
                curentDay.setDate(curentDay.getDate() + 1);
              } while (curentDay <= endDate);

              // Устанавливаю края
              if (startDate.getTime() !== endDate.getTime()) {
                markedDatesCur[startDate.toISOString().substr(0, 10)] = {
                  startingDay: true,
                  color: 'green',
                };
                markedDatesCur[endDate.toISOString().substr(0, 10)] = {
                  endingDay: true,
                  color: 'green',
                };
              } else {
                markedDatesCur[startDate.toISOString().substr(0, 10)] = {
                  startingDay: true,
                  endingDay: true,
                  color: 'green',
                };
                //  console.log('markedDatesCur', markedDatesCur);
              }
            }
            //Меняю состояние
            setmarkedDates(markedDatesCur);
            // console.log('markedDatesCur', markedDatesCur);
            // console.log('countClick1', countClick);
            // console.log('startDate',startDate);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            // console.log('month changed', month);
          }}
          renderArrow={(direction) =>
            direction === 'left' ? (
              <Ionicons name="ios-arrow-back" size={20} />
            ) : (
              <Ionicons name="ios-arrow-forward" size={20} />
            )
          }
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  buttonUp: {
    shadowColor: '#000',
    borderRadius: 16,
    borderColor: '#F2ECD7',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.41,
    // shadowRadius: 9.11,
    // elevation: 14,
  },
});
