import React from 'react';
import {
  UIManager,
  Platform,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Queue from './screens/queue';
import Approve from './screens/approve';
import History from './screens/history';
import Agreement from './screens/agreement';
import MyList from './screens/myList';
import TaskProfile from './screens/taskProfile';

// const myID_Clients = 'Apps_000000003';
// const myDaysApprove = 10;

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="QueueN" component={Queue}/>
      //<Stack.Screen name="TaskN" component={TaskProfile}/> 
     </Stack.Navigator >
  )
};
 const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator initialRouteName="Queue"
      //screenOptions={{ headerShown: false }} 
      screenOptions={({ route }) => ({
        headerShown: false,
        //swipeEnabled: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Queue') {
            iconName = focused
              ? 'md-copy-outline'
              : 'md-copy-outline';
          } else if (route.name === 'Approve') {
            iconName = focused ? 'hourglass' : 'hourglass';
          } else if (route.name === 'MyList') {
            iconName = focused ? 'md-heart' : 'md-heart';
          } else if (route.name === 'History') {
            iconName = focused ? 'md-book-outline' : 'md-book-outline';
          } else if (route.name === 'Agreement') {
            iconName = focused ? 'md-document-text-outline' : 'md-document-text-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}

    >
      <Tab.Group
        screenOptions={({ navigation }) => ({ swipeEnabled: true })}
      ></Tab.Group>

      <Tab.Screen name="Queue" component={Queue} />
      <Tab.Screen name="Approve" component={Approve} />
      <Tab.Screen name="MyList" component={MyList} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Agreement" component={Agreement} />

    </Tab.Navigator >
  )
};

export default function App() {
  return (

    <NavigationContainer>     
      <MyTabs/>
    </NavigationContainer>

  );
}