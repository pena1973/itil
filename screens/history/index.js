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
import { useSelector } from 'react-redux';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export default function ScreenHistory({navigation}) {

    // читаем лист и фильтруем 
    const myList = useSelector((state) => state.myListReducer);
    // Фильтр по статусам только НЕ активные 
    const myListInitial = myList?.filter((task) => (task?.status.includes('canceled') || task?.status.includes('completed') || task?.status.includes('closed')));

    const [historyFilteretdTasks, setmyListFilteredTasks] = useState(myListInitial); // Применение фильтра к очереди 
    
    const renderItemHistory = ({ item, index }) => {
        return <HistoryItem task={item} index={index} navigation={navigation} key = {(index)=>index.toString()} />;
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.text, {}]}> Мои закрытые задачи</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
            <Filter showStatus={true} menuStatus = {['canceled','closed','completed']}/>
            <FlatList data={historyFilteretdTasks} renderItem={renderItemHistory} ListHeaderComponent={TopHistoryItem} />

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
