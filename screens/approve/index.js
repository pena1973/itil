import React, { useEffect, useState, useReducer } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  UIManager,
  Platform,
} from 'react-native';
import Filter from '../../components/Filter';
import ApproveTaskItem from '../../components/ApproveTaskItem';
import TopApproveTaskItem from '../../components/TopApproveTaskItem';
import { useSelector, useDispatch } from 'react-redux';
import { aprTask, refTask} from '../../redusers/myListReduser';


if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function ScreenApprove() {
    
  const myList = useSelector((state) => state.myListReducer);
  const approveTasks = myList?.filter((task) => task?.status.includes('checking')); // отобрали только те что на проверке
  const agreement = useSelector((state) => state.agreementReducer);  // число дней проверки
  const myDaysApprove = agreement.cheking_days;
  console.log('approveTasks', approveTasks);

  const approveDispatch = useDispatch();
 //const [approveTasks, approveDispatch] = useReducer(myListReduser, approveTasksInitial);
 
 // временно исключу фильттр из отбора
  const [approveFilteretdTasks, setApproveFilteredTasks] = useState(approveTasks); // Применение фильтра к приемке
  // фильтр - функция которая вызывает функцию отбора  в  списке приемки
  // на вход зайдет состояние фильтра
  const approveFilterTasks = (stateFilter) => {
    const arrStatus = stateFilter?.arrStatus;
    const arrPriority = stateFilter?.arrPriority;
    const dateStart = stateFilter?.dateStart;
    const dateFinish = stateFilter?.dateFinish;

    //  последовательно применяем фильтр к каждому элементу
    if (stateFilter != undefined) {
      const fTasks = approveTasks.filter((task) => {
        const dateRegistered = (registred = task.registred) => {
          return (new Date(
            registred.substr(7, 4),
            registred.substr(4, 2) - 1,
            registred.substr(0, 2) + 1,
            0,
            0,
            0,
            0
          ))
        }
        // Отсекли по датам
        if (dateStart != undefined && dateRegistered < dateStart) return false
        if (dateFinish != undefined && dateRegistered > dateFinish) return false
        // Отсекли по приоритетам
        // Отсекли по статусам

        return true
      })
      setApproveFilteredTasks([...fTasks]);
    } else {
      setApproveFilteredTasks(approveTasks);
    }
  };

  const renderItemApprove = ({ item, index }) => {
    return (
      <ApproveTaskItem
        task={item}
        index={index}
        myDaysApprove={myDaysApprove}
        approve={(task) => approveDispatch(aprTask(task))}
        open={(task) => open(task)}
        refuse={(task) => approveDispatch(refTask(task))}        
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {}]}>Мои задачи на приемке</Text>
      <Filter showStatus={false}/>

      <FlatList data={approveTasks} renderItem={renderItemApprove} ListHeaderComponent={TopApproveTaskItem}/>

      <TouchableOpacity style={styles.button} onPress={() => add()}>
        <Text style={styles.buttonText}>Добавить задачу </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F2ECD7',
    padding: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    color: '#333333',
    alignSelf: 'center',
  },

  buttonFilter: {
    padding: 3,
    flexDirection: 'row',
    borderRadius: 16,
    margin: 5,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  buttonUp: {
    // backgroundColor: '',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  buttonDown: {
    backgroundColor: '#D8D2BF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 24,
    flexDirection: 'row',
    color: '#FFDE33',
  },
  button: {

    alignItems: 'center',
    backgroundColor: '#746250',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
});
