import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    UIManager,
    Platform,

} from 'react-native';

import QueueTaskItem from '../../components/QueueTaskItem';
import TopQueueTaskItem from '../../components/TopQueueTaskItem';

import { useSelector } from 'react-redux';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
// Временно пока нет АПИ
 const queueTasksInitial = [
     {
         title: 'Задача1',
        id_client: 'Apps_000000003',
        content:
          'Добрый день. Как называется телеграм-канал, в котором люди отписываться по обстановке на границе с Россией',
        status: 'completed',
        priority: 'low',
        created: '24.04.2022 17:34:50',
        registred: '27.04.2022 18:39:43',
        inProgres: '',
        inCheking: '03.09.2022 18:39:43',
        apruved: '',
        canceled: '',
        closed: '',
        estime: 10,
        managerNotes: '',
        id_Tiket: 'Apps_000000005',
        files: [
          {
            file: 'Двоичный файл',
            name: 'аватар вася',
            type: 'png',
            size: 176467,
          },
        ],
      },
    {
      title: 'Задача1',
      id_client: 'Apps_000000003',
      content:
        'Добрый день. Как называется телеграм-канал, в котором люди отписываться по обстановке на границе с Россией',
      status: 'completed',
      priority: 'low',
      created: '24.04.2022 17:34:50',
      registred: '27.04.2022 18:39:43',
      inProgres: '',
      inCheking: '03.09.2022 18:39:43',
      apruved: '',
      canceled: '',
      closed: '',
      estime: 10,
      managerNotes: '',
      id_Tiket: 'Apps_000000005',
      files: [
        {
          file: 'Двоичный файл',
          name: 'аватар вася',
          type: 'png',
          size: 176467,
        },
      ],
    },
    {
      title: 'Задача1',
      id_client: 'Apps_000000002',
      content:
        'Думаю, в нашей группе назрело создание темы по обмену денег между странами. В случае необходимости получить рубли или евро прошу вас размещать свои нужды здесь, дабы не размазывать свои посты по бесконечной ленте, а иметь все в одной горячей теме.Я думаю правильно будет все детали обмена вести в ЛС, где вы сможете договориться с другим участником о сумме, способе и времени передачи денег.',
      status: 'completed',
      priority: 'low',
      created: '24.04.2022 17:34:50',
      registred: '17.08.2022 18:39:43',
      inProgres: '',
      inCheking: '01.09.2022 18:39:43',
      apruved: '',
      canceled: '',
      closed: '',
      estime: 20,
      managerNotes: '',
      id_Tiket: 'Apps_000000005',
      files: [
        {
          file: 'Двоичный файл',
          name: 'аватар вася',
          type: 'png',
          size: 176467,
        },
      ],
    },
    {
      title: 'Задача1',
      id_client: 'Apps_000000005',
      content:
        'Думаю, в нашей группе назрело создание темы по обмену денег между странами. В случае необходимости получить рубли или евро прошу вас размещать свои нужды здесь, дабы не размазывать свои посты по бесконечной ленте, а иметь все в одной горячей теме.Я думаю правильно будет все детали обмена вести в ЛС, где вы сможете договориться с другим участником о сумме, способе и времени передачи денег.',
      status: 'completed',
      priority: 'low',
      created: '24.04.2022 17:34:50',
      registred: '17.08.2022 18:39:43',
      inProgres: '',
      inCheking: '01.09.2022 18:39:43',
      apruved: '',
      canceled: '',
      closed: '',
      estime: 20,
      managerNotes: '',
      id_Tiket: 'Apps_000000009',
      files: [
        {
          file: 'Двоичный файл',
          name: 'аватар вася',
          type: 'png',
          size: 176467,
        },
      ],
    },
    {
      title: 'Задача1',
      id_client: 'Apps_000000006',
      content:
        'Думаю, в нашей группе назрело создание темы по обмену денег между странами. В случае необходимости получить рубли или евро прошу вас размещать свои нужды здесь, дабы не размазывать свои посты по бесконечной ленте, а иметь все в одной горячей теме.Я думаю правильно будет все детали обмена вести в ЛС, где вы сможете договориться с другим участником о сумме, способе и времени передачи денег.',
      status: 'completed',
      priority: 'low',
      created: '24.04.2022 17:34:50',
      registred: '17.08.2022 18:39:43',
      inProgres: '',
      inCheking: '01.09.2022 18:39:43',
      apruved: '',
      canceled: '',
      closed: '',
      estime: 20,
      managerNotes: '',
      id_Tiket: 'Apps_000000008',
      files: [
        {
          file: 'Двоичный файл',
          name: 'аватар вася',
          type: 'png',
          size: 176467,
        },
      ],
    },
    {
      title: 'Задача1',
      id_client: 'Apps_000000003',
      content:
        'Думаю, в нашей группе назрело создание темы по обмену денег между странами. В случае необходимости получить рубли или евро прошу вас размещать свои нужды здесь, дабы не размазывать свои посты по бесконечной ленте, а иметь все в одной горячей теме.Я думаю правильно будет все детали обмена вести в ЛС, где вы сможете договориться с другим участником о сумме, способе и времени передачи денег.',
      status: 'completed',
      priority: 'low',
      created: '24.04.2022 17:34:50',
      registred: '17.08.2022 18:39:43',
      inProgres: '',
      inCheking: '01.09.2022 18:39:43',
      apruved: '',
      canceled: '',
      closed: '',
      estime: 20,
      managerNotes: '',
      id_Tiket: 'Apps_000000007',
      files: [
        {
          file: 'Двоичный файл',
          name: 'аватар вася',
          type: 'png',
          size: 176467,
        },
      ],
    },
    {
      title: 'Задача1',
      id_client: 'Apps_000000003',
      content:
        'Думаю, в нашей группе назрело создание темы по обмену денег между странами. В случае необходимости получить рубли или евро прошу вас размещать свои нужды здесь, дабы не размазывать свои посты по бесконечной ленте, а иметь все в одной горячей теме.Я думаю правильно будет все детали обмена вести в ЛС, где вы сможете договориться с другим участником о сумме, способе и времени передачи денег.',
      status: 'completed',
      priority: 'low',
      created: '24.04.2022 17:34:50',
      registred: '17.08.2022 18:39:43',
      inProgres: '',
      inCheking: '01.09.2022 18:39:43',
      apruved: '',
      canceled: '',
      closed: '',
      estime: 20,
      managerNotes: '',
      id_Tiket: 'Apps_000000006',
      files: [
        {
          file: 'Двоичный файл',
          name: 'аватар вася',
          type: 'png',
          size: 176467,
        },
      ],
    },
  ];

export default function ScreenQueue({navigation}) {
    const agreement = useSelector((state) => state.agreementReducer);  // число дней проверки
    let myID_Clients = agreement.myID_Clients;
   
    const [queueTasks, setQueueTasks] = useState(queueTasksInitial);
    const loadQueueTasks = () => {
    //   const url = 'https://api.thecatapi.com/v1/breeds';
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       console.log(response);
    //       if (response?.data) {
    //         setQueueTasks(response?.data);
    //       }
    //     })
    //     .catch((error) => console.log(error));
    // временно пока нет апи
             setQueueTasks(queueTasksInitial);
     };
    useEffect(() => {
        loadQueueTasks();
    }, []);

    const [onlyMy, setOnlyMyTasks] = useState(false);
    const [queueFilteretdTasks, setQueueFilteredTasks] = useState(queueTasks); // Применение фильтра к очереди
    useEffect(() => {
        queueFilterTasks(onlyMy);
    }, [onlyMy]);

    // фильтер - функция которая вызывает функцию отбора  в очереди а на вход заходит элемент массива
    const queueFilterTasks = (onlyMy) => {
        console.log('queueTasks',queueTasks);
        if (onlyMy) {
            const fTasks = queueTasks.filter((task) =>              
            task?.id_client?.toLowerCase().includes(myID_Clients.toLowerCase())
            );
            setQueueFilteredTasks([...fTasks]);
        } else {
            setQueueFilteredTasks(queueTasks);
        }
    };

    const renderItemQueue = ({ item, index }) => {
        return <QueueTaskItem task={item} index={index} keyExtractor = {(index)=>index.toString()}/>;
    };

    var text1 = onlyMy ? 'Показать все' : 'Показать свои';
    var styleButtonOnlyMy = onlyMy ? styles.buttonDown : styles.buttonUp;

    return (
        <View style={styles.container}>
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

            <FlatList data={queueFilteretdTasks} renderItem={renderItemQueue} ListHeaderComponent={TopQueueTaskItem} />

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('TaskProfile')}>
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
