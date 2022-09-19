import React, { useEffect, useState, useReducer } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    UIManager,
    Platform,

} from 'react-native';

import { Provider, useSelector, useDispatch } from 'react-redux';

//import store from './redusers/store';
import { store, persistor } from '../../redusers/store';
import { PersistGate } from 'redux-persist/integration/react';

import agreementReduser, { upDate} from '../../redusers/agreementReduser';
//import {selectAgreement} from '../../reducers/agreementReduser';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

function ScreenAgreementIn() {
   
    const agreementInitial = useSelector((state) => state.agreement);
    const [state, agreementDispatch] = useReducer(agreementReduser, agreementInitial);
   // const agreement = useSelector(state => state.agreement);
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
            <Text style={[styles.text, { marginTop:15}]}> Договор</Text>

            <Text style={[styles.text, { marginTop:15, fontSize: 16, fontWeight: '500', lineHeight: 16 }]}> Договор подписан {state?.signed}</Text>
            <Text style={[styles.text, { marginTop:15, fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> Абоненская плата {state?.regular_fee}</Text>
            <Text style={[styles.text, { marginTop:15, marginBottom:15, fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> Рабочих дней на проверку задачи {state?.cheking_days} </Text>

            <View style={{ flexDirection: 'row', padding:7, borderWidth:1, borderBottomWidth:0, marginLeft:15, marginRight:15 }}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.text, { fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> Приоритет </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.text, { fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> Стоимость часа </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', padding:7 , borderWidth:1 ,borderBottomWidth:0 , marginLeft:15, marginRight:15  }}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.text, { fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> Высокий </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.text, { fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> {state?.high_priority} </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', padding:7 , borderWidth:1 ,borderBottomWidth:0 , marginLeft:15, marginRight:15}}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.text, { fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> Средний </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.text, { fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> {state?.midle_priority} </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', padding:7 , borderWidth:1 , marginLeft:15, marginRight:15}}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.text, { fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> Низкий </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.text, { fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> {state?.low_priority} </Text>
                </View>
            </View>

            <Text style={[styles.text, { marginTop:15 }]}> Контакты</Text>
            <Text style={[styles.text, { marginTop:15, fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> Техническая поддержка (телефон, мейл)</Text>
            <Text style={[styles.text, { marginTop:15, fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> Менеджер {state?.manager}</Text>
            <Text style={[styles.text, { marginTop:15, fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> Часы работы: </Text>
            <Text style={[styles.text, { marginTop:15, fontSize: 14, fontWeight: '500', lineHeight: 14 }]}> рабочие дни с 9-00 до 18-00 </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Support()}>
                <Text style={styles.buttonText}>Сообщение менеджеру </Text>
            </TouchableOpacity>

        </View>
    );
}


export default function ScreenAgreement() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ScreenAgreementIn />
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
