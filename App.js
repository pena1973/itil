import React, { useEffect, useState, useReducer } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  UIManager,
  Platform,
  ScrollView,
} from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import Filter from './components/Filter';
import TaskApruve from './components/TaskApruve';
import TaskItem from './components/TaskItem';
import TopTaskItem from './components/TopTaskItem';
import TopTaskApruve from './components/TopTaskApruve';

import { Provider, useSelector, useDispatch } from 'react-redux';



//import store from './redusers/store';
import {store,persistor} from './redusers/store';
import { PersistGate } from 'redux-persist/integration/react';

import aprooveReduser, { aprTask, rejTask, addTask } from './redusers/aprooveReduser';
import queueReduser, { remTaskQ, addTaskQ } from './redusers/queueReduser'

const myID_Clients = 'Apps_000000003';
const myDaysApprove = 10;

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function AddTask() {}
 


function App() {

  
  const [onlyMy, setOnlyMyTasks] = useState(false);
  const [queueFilteretdTasks, setQueueFilteredTasks] = useState(queueTasks); // Применение фильтра к очереди
  const [aprooveFilteretdTasks, setAprooveFilteredTasks] = useState(aprooveTasks); // Применение фильтра к приемке

  useEffect(() => {
    queueFilterTasks(onlyMy);
  }, [onlyMy]);

  const aprooveTasksInitial = useSelector((state) => state.aprooveTasks);
  const queueTasksInitial = useSelector((state) => state.queueTasks);
  
  const [aprooveTasks, approveDispatch] = useReducer(aprooveReduser, aprooveTasksInitial);
  const [queueTasks, queueDispatch] = useReducer(queueReduser, queueTasksInitial);

function Aproove(task) {
    approveDispatch(aprTask(task));
 }
  // фильтер - функция которая вызывает функцию отбора  в очереди а на вход заходит элемент массива
  const queueFilterTasks = (onlyMy) => {
    if (onlyMy) {
      const fTasks = queueTasks.filter((task) =>
        task.id_client.toLowerCase().includes(myID_Clients.toLowerCase())
      );
      setQueueFilteredTasks([...fTasks]);
    } else {
      setQueueFilteredTasks(queueTasks);
    }
  };

  // фильтр - функция которая вызывает функцию отбора  в  списке приемки
  // на вход зайдет состояние фильтра
  const aprooveFilterTasks = (stateFilter) => {
     const arrStatus = stateFilter?.arrStatus;
     const arrPriority = stateFilter?.arrPriority;
     const dateStart = stateFilter?.dateStart;
     const dateFinish = stateFilter?.dateFinish;

    //  последовательно применяем фильтр к каждому элементу
    if (stateFilter!=undefined) {
      const fTasks = aprooveTasks.filter((task) =>{
        const dateRegistered =(registred = task.registred) =>{
            return(new Date(
              registred.substr(7,4),
              registred.substr(4,2) - 1,
              registred.substr(0,2)+1,
              0,
              0,
              0,
              0
            ))}
            // Отсекли по датам
            if (dateStart!= undefined && dateRegistered<dateStart) return false
            if (dateFinish!= undefined && dateRegistered>dateFinish) return false
            // Отсекли по приоритетам
            // Отсекли по статусам
            
            return true 
      })
       setAprooveFilteredTasks([...fTasks]);       
    } else {
      setAprooveFilteredTasks(aprooveTasks);
    }
  };

  const renderItem = ({ item, index }) => {
    return <TaskItem task={item} index={index} />;
  };
  const renderItemApruve = ({ item, index }) => {
    return (
      <TaskApruve
        task={item}
        index={index}
        myDaysApprove={myDaysApprove}
        aproove={(task) => Aproove(task)}
      />
    );
  };

  var text1 = onlyMy ? 'Показать все' : 'Показать свои';
  var styleButtonOnlyMy = onlyMy ? styles.buttonDown : styles.buttonUp;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={[styles.text, {}]}>Очередь</Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[
              styles.buttonFilter,
              { flexDirection: 'row' },
              styleButtonOnlyMy,
              { width: 110 },
            ]}
            onPress={() => {
              setOnlyMyTasks(!onlyMy);
            }}>
            <Text>{text1}</Text>
          </TouchableOpacity>
        </View>
        <TopTaskItem />
        <FlatList data={queueFilteretdTasks} renderItem={renderItem} />
        
        <TouchableOpacity style={styles.button} onPress={() => AddTask()}>
          <Text style={styles.buttonText}>Добавить задачу </Text>
        </TouchableOpacity>
        
        <Text style={[styles.text, {}]}>Мои задачи на приемке</Text>
        <Filter />
        <TopTaskApruve />
        <FlatList data={aprooveTasks} renderItem={renderItemApruve} />
      </ScrollView>
    </View>
  );
}

export default function App1() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
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
    textAlign: 'center',
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
