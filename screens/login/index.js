import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import axios from 'axios';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  'f2899b7f-b575-4378-8ba4-7a4a9b1cabe0';

export default function App() {
  const Enter = async () => {
    const url = '/login';
    try {
      const response = await axios.get(url);
      //     const image = response.data[rNumber(response.data.length)]?.image;
      //     console.log(image?.id);
      //     setImage(image);
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Servis Desk</Text>
      <Text style={styles.text}>MITSOL</Text>

      <View style={styles.textInputField}>
        <Ionicons style={styles.textInputIcon} name="md-enter-outline" size={20} />
         <TextInput style={styles.textInp} placeholder="Login"/>
      </View>

      <View style={styles.textInputField}>
        <Ionicons style={styles.textInputIcon} name="md-finger-print" size={20} />
        <TextInput style={styles.textInp} placeholder="Password"/>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => Enter()}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    justifyContent: 'flex-start',
    backgroundColor: '#F2ECD7',
    padding: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 100,
    color: '#333333',
    alignSelf: 'center',
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
    margin: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  textInp: {
    fontSize: 12,
    fontWeight: '400',
    height: 20,
    marginLeft: 5,
    borderWidth: 0,
    borderColor: '#F7F7F7',
    //backgroundColor: 'yellow',
    selectionColor: 'red',
  },
  textInputField: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    justifyContent: 'flex-start',
    borderColor: '#746250',
    borderWidth: 1,
    borderRadius: 10,

    padding: 5,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: -5,
    shadowOpacity: 1.0,
  },
  textInputIcon: {
    margin: 0,
  },
});
