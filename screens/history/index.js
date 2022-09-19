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

import HistoryItem from '../../components/MyListItem';
import TopHistoryItem from '../../components/TopMyListItem';
import Filter from '../../components/Filter';
import { Provider, useSelector, useDispatch } from 'react-redux';

//import store from './redusers/store';
import { store, persistor } from '../../redusers/store';
import { PersistGate } from 'redux-persist/integration/react';

import historyReduser, { addHist, addTaskQ } from '../../redusers/historyReduser'

const myID_Clients = 'Apps_000000003';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
// Дописать
function AddTask() { }

function ScreenHistoryIn() {

    const [historyFilteretdTasks, setHistoryFilteredTasks] = useState(historyTasks); // Применение фильтра к очереди
    const historyInitial = useSelector((state) => state.historyTasks);
    const [historyTasks, historyDispatch] = useReducer(historyReduser, historyInitial);

    const renderItemHistory = ({ item, index }) => {
        return <HistoryItem task={item} index={index} />;
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.text, {}]}> Мои закрытые задачи</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
            <Filter />
            <FlatList data={historyFilteretdTasks} renderItem={renderItemHistory} ListHeaderComponent={TopHistoryItem} />
            
            <TouchableOpacity style={styles.button} onPress={() => AddTask()}>
                <Text style={styles.buttonText}>Добавить задачу </Text>
            </TouchableOpacity>

        </View>
    );
}


export default function ScreenHistory() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ScreenHistoryIn />
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
