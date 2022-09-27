import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//import axios from 'axios';
// axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
// axios.defaults.headers.common['x-api-key'] =
//   'f2899b7f-b575-4378-8ba4-7a4a9b1cabe0';

export default function Intro({navigation}) {

  const LogIn = async () => {
    const url = '/login';
    //try {
    //   const response = await axios.get(url);    
    //     const image = response.data[rNumber(response.data.length)]?.image;
    //     console.log(image?.id);
    //     setImage(image);
    // } catch (error) {
    //  console.log(error);
    // }
    navigation.navigate("Login");
    //console.log(props);
  };

  const SignIn = async () => {
    const url = '/SignIn';
    //try {
    //  const response = await axios.get(url);    
    //     const image = response.data[rNumber(response.data.length)]?.image;
    //     console.log(image?.id);
    //     setImage(image);
    // } catch (error) {
    //    console.log(error);
    //  }
    //console.log(route);
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Servis Desk</Text>
      <Text style={styles.text}>MITSOL</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => LogIn()}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => SignIn()}>
        <Text style={styles.buttonText}>Sign In</Text>
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
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
});
