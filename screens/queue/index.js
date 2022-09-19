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

import QueueTaskItem from '../../components/QueueTaskItem';
import TopQueueTaskItem from '../../components/TopQueueTaskItem';

import { Provider, useSelector, useDispatch } from 'react-redux';

//import store from './redusers/store';
import { store, persistor } from '../../redusers/store';
import { PersistGate } from 'redux-persist/integration/react';

import queueReduser, { remQueue, addQueue } from '../../redusers/queueReduser'

const myID_Clients = 'Apps_000000003';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
// Дописать
function AddTask() { }

function ScreenQueueIn() {

    const [onlyMy, setOnlyMyTasks] = useState(false);
    const [queueFilteretdTasks, setQueueFilteredTasks] = useState(queueTasks); // Применение фильтра к очереди

    useEffect(() => {
        queueFilterTasks(onlyMy);
    }, [onlyMy]);

    const queueTasksInitial = useSelector((state) => state.queueTasks);
    const [queueTasks, queueDispatch] = useReducer(queueReduser, queueTasksInitial);

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

    const renderItemQueue = ({ item, index }) => {
        return <QueueTaskItem task={item} index={index} />;
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
            
            <TouchableOpacity style={styles.button} onPress={() => AddTask()}>
                <Text style={styles.buttonText}>Добавить задачу </Text>
            </TouchableOpacity>

        </View>
    );
}


export default function ScreenQueue() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ScreenQueueIn />
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
