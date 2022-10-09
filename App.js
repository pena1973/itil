import React from 'react';
import {AppRegistry,
  UIManager,
  Platform,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redusers/store';

 //import store from './redusers/store';

// import agreementReduser, { upDate} from '../../redusers/agreementReduser';
// import {selectAgreement} from '../../redusers/selectors';



import Queue from './screens/queue';
import Approve from './screens/approve';
import History from './screens/history';
import Agreement from './screens/agreement';
import MyList from './screens/myList';
import TaskProfile from './screens/taskProfile';
import Intro from './screens/intro';
import Login from './screens/login';
import Signin from './screens/signin';

// const myID_Clients = 'Apps_000000003';
// const myDaysApprove = 10;

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }} >
//       <Stack.Screen name="MyListN" component={MyList}/>
//       <Stack.Screen name="TaskProfile" component={TaskProfile}/> 
//      </Stack.Navigator >
//   )
// };

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Intro" >
      <Stack.Screen name="Intro" component={Intro}/> 
      <Stack.Screen name="Login" component={Login}/> 
      <Stack.Screen name="Signin" component={Signin}/> 
      <Stack.Screen name="TaskProfile" component={TaskProfile}/> 
      <Stack.Screen name="MyTabs" component={MyTabs}/> 

     </Stack.Navigator >
  )
};
// const Tab = createBottomTabNavigator();
 const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator initialRouteName="Queue"
     tabBarPosition ='bottom'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
         tabBarIcon: ({ focused, color, size = 20 }) => {
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
     
      <Tab.Screen name="Queue" component={Queue} />
      <Tab.Screen name="Approve" component={Approve} />
      <Tab.Screen name="MyList" component={MyList} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Agreement" component={Agreement} />

    </Tab.Navigator >
  )
};

function AppIn() {
  return (

    <NavigationContainer>     
      <MainStack/>
    </NavigationContainer>

  );
}

export default function App() {
  // console.log('store',store);
  // console.log('queueReducer',store.getState().queueReducer); 
  return (
      <Provider store={store}>        
          <PersistGate loading={null} persistor={persistor}>
              <AppIn />
          </PersistGate>
      </Provider>
  );
}
