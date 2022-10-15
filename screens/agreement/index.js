import React, { useEffect, useState, useReducer } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    UIManager,
    Platform,
    Linking

} from 'react-native';

import {useSelector, useDispatch } from 'react-redux';
import { resetAgreement, fetchAgreement, updateAgreement, fetchAgreementError } from '../../redusers/agreementReduser';
import { resetMyList } from '../../redusers/myListReduser';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
const openwebsite = () => {
    Linking.openURL(`https://www.mitsol.eu/new/`);
};
const openwecontact = () => {
    Linking.openURL(`https://www.facebook.com/MITSol.eu`);
};

// const openweinstagram = () => {
// Linking.openURL(` https://www.instagram.com/p/Ci77LcqMRYw/?igshid=NzNkNDdiOGI=`);
// };
const openChat = () => {
    const text = 'Hello from my app';
    const phone = '+79163378197';
    Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
};
const openBell = () => {
    const client = { phone: '+79163378197' };
    Linking.openURL(`tel:${client.phone}`);
};

const openMail = () => {
    const client = { mail: 'info@mitsol.eu' };
    Linking.openURL('mailto:${client.mail}?');           
};

export default function ScreenAgreement({navigation}) {
    const agreement = useSelector((state) => state.agreementReducer);
    const agreementDiapatch  =  useDispatch();

    const resetAll= ()=>{
        //console.log(1);
         agreementDiapatch(resetAgreement());
         agreementDiapatch(resetMyList());
         
     };
    // сработает один раз  при загрузке страницы, возможно его надо вынести на старт приложения
     useEffect(() => {
        console.log("start fetch agreement")
        // Наверное на вход надо ключ логин пароль
        agreementDiapatch(fetchAgreement());
      }, [agreementDiapatch]);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={[styles.textHeader]}> Договор</Text>

                <Text style={[styles.text, { marginTop: 15, fontSize: 16, lineHeight: 16 }]}> Договор подписан {agreement?.signed}</Text>
                <Text style={[styles.textHeader,{fontSize: 14, lineHeight: 14 }]}> Абоненская плата {agreement?.regular_fee}</Text>
                <Text style={[styles.textUsual, {marginBottom: 15}]}> Рабочих дней на проверку задачи {agreement?.cheking_days} </Text>

                <View style={{ flexDirection: 'row', padding: 7, borderWidth: 1, borderBottomWidth: 0, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.text]}> Приоритет </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.text]}> Стоимость часа </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', padding: 7, borderWidth: 1, borderBottomWidth: 0, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.text]}> Высокий </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.text]}> {agreement?.high_priority} </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', padding: 7, borderWidth: 1, borderBottomWidth: 0, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.text]}> Средний </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.text]}> {agreement?.midle_priority} </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', padding: 7, borderWidth: 1, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.text]}> Низкий </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.text]}> {agreement?.low_priority} </Text>
                    </View>
                </View>

                <Text style={[styles.textHeader]}> Контакты</Text>
                <Text style={[styles.textLink]} onPress={openwebsite}> https://www.mitsol.eu</Text>
                
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.textUsual}> Телефон { } </Text>
                    <Text style={styles.textLink} onPress={openBell}> +79163378197</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.textUsual}> Чат { } </Text>
                    <Text style={styles.textLink} onPress={openChat}> +79163378197</Text>
                </View>
                
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.textUsual}> Мейл { } </Text>
                    <Text style={styles.textLink} onPress={openMail}> info@mitsol.eu</Text>
                </View>
                
                
                <Text style={[styles.textUsual,{fontSize: 16, lineHeight: 16 }]}> Менеджер {agreement?.manager}</Text>
                <Text style={[styles.textUsual,{fontSize: 16, lineHeight: 16 }]}> ID клиента {agreement?.myID_Clients}</Text>
                <Text style={[styles.textHeader]}> Часы работы: </Text>
                <Text style={[styles.textHeader,{fontSize: 14, lineHeight: 14 }]}> рабочие дни с 9-00 до 18-00 </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => resetAll()}>
                <Text style={styles.buttonText}>Сбросить </Text>
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
    textUsual: {
        fontSize: 20,
        color: '#333333',
        alignSelf: 'center',
        marginTop: 15, 
        fontSize: 14, 
        fontWeight: '500', 
        lineHeight: 14 
    },
    textLink: {
        fontSize: 20,
        color: '#333333',
        alignSelf: 'center',
        marginTop: 15, 
        fontSize: 14, 
        fontWeight: '500', 
        lineHeight: 14, 
        textDecorationLine:'underline',
        color:'blue'
    },
    textHeader: {
        fontSize: 20,
        marginTop: 15, 
        fontWeight: '700',
        lineHeight: 20,
        color: '#333333',
        alignSelf: 'center',
    },
    text: {
        color: '#333333',
        alignSelf: 'center',
        fontSize: 14, 
        fontWeight: '500', 
        lineHeight: 14 
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
