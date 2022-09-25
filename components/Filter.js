import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import DropdownButton from './DropDownButton';
import CalendarMy from './CalendarMy';

//const SCREEN_WIDTH = Dimensions.get('window').width;

//console.log(SCREEN_WIDTH);
// надо на вход список пунктов отбора
export default function Filter({showPriority=true, showStatus=true, showCalendar=true, menuStatus = []}) {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [heightFilter, setHeightFilter] = useState(20);
  const [heightListButton1, setheightListButton1] = useState(50);
  const [heightListButton2, setheightListButton2] = useState(50);
  const [heightCalendar, setheightCalendar] = useState(50);

//  полное меню статусов
   let menu = [
    {
      label: 'Черновик',
      value: 'draft',
      containerStyle: { flexDirection: 'row' },
    },
    {
      label: 'Отменен',
      value: 'canceled',
      containerStyle: { flexDirection: 'row' },
    },
    {
      label: 'В работе',
      value: 'processing',
      containerStyle: { flexDirection: 'row' },
    },
    {
      label: 'Закрыт',
      value: 'closed',
      containerStyle: { flexDirection: 'row' },
    },
    {
      label: 'Зарегистрирован',
      value: 'registered',
      containerStyle: { flexDirection: 'row' },
    },
    {
      label: 'Отказ',
      value: 'not_accepted',
      containerStyle: { flexDirection: 'row' },
    },
    {
      label: 'На проверке',
      value: 'checking',
      containerStyle: { flexDirection: 'row' },
    },
    {
      label: 'Завершен',
      value: 'completed',
      containerStyle: { flexDirection: 'row' },
    },
   ]

// фильтруем меню статусов
 let newMenu1 = [];
 if (menuStatus.length != 0)
   for (let i in menu) {   
     if (menuStatus?.includes(menu[i].value)) { 
       newMenu1 = [...newMenu1, menu[i]];
     }
   } else {
     newMenu1 = menu;
 }
//  console.log('menuStatus',menuStatus.length);
//  console.log('newMenu1',newMenu1.length);

// высота фильтра
useEffect(() => {
  
  var mheightCalendar = (expanded ? 360 : showCalendar? 20:0);
  var mheightListButton1 = (expanded1 ? 170 : showPriority? 50:0); // приоритет
  var mheightListButton2 = (expanded2 ? (newMenu1.length*40+50) : showStatus? 50 : 0); // статус
  
  setheightListButton1(mheightListButton1);// приоритет
  setheightListButton2(mheightListButton2);// статус
  setheightCalendar(mheightCalendar);
  setHeightFilter(30 + mheightCalendar + mheightListButton1 + mheightListButton2);
  //открытие списков
}, [expanded, expanded1, expanded2]);

  return (
    <View
      style={{
        backgroundColor: '#F2ECD7',
        height: heightFilter,
        padding: 5,
      }}>     
      
      {showStatus &&<View
        style={{
          height: heightListButton2,
        }}>
       <DropdownButton
          expanded={expanded2}
          setOpenMy={() => {
            setExpanded2(!expanded2);
          }}
          placeholder="Status"
          selection={[]}
          label={newMenu1}
        />
        </View>}
      
      {showPriority &&<View
        style={{
          height: heightListButton1,
        }}>
      <DropdownButton
          expanded={expanded1}
          setOpenMy={() => {
            setExpanded1(!expanded1);
          }}
          placeholder="Priority"
          selection={[]}
          label={[
            {
              label: 'Высокий',
              value: 'high',
              containerStyle: { flexDirection: 'row' },
            },
            {
              label: 'Средний',
              value: 'midle',
              containerStyle: { flexDirection: 'row' },
            },
            {
              label: 'Низкий',
              value: 'low',
              containerStyle: { flexDirection: 'row' },
            },
          ]}
        />  
 
      </View>}

      <TouchableOpacity
       style={{flex:1,
        borderWidth: 1,
        borderRadius:5,
      }}
        onPress={() => {
          setExpanded(!expanded);
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        }}>
        <CalendarMy
          dataStart={undefined}
          dataFinish={undefined}
          expanded={expanded}
        />
      </TouchableOpacity>
    </View>
  );
}

{/* <TouchableOpacity
onPress={() => {
  setExpanded(!expanded);
  setExpanded1(!expanded);
  setExpanded2(!expanded);
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
}}>
<Text style={{ lineHeight: 15, margin: 5 }}> Фильтр</Text>
</TouchableOpacity> */}