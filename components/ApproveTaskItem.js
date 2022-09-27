import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Indicator from './Indicator';

export default function ApproveTaskItem({ task, navigation, myDaysApprove, approve, refuse}) {
  var describtion = task?.content?.slice(0, 115);
  if (describtion?.length < task?.content?.length) {
    describtion = describtion + '...';
  }

  return (
    <View style={{ borderColor: 'black', borderWidth: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <TouchableOpacity style={{ width: 70, justifyContent: 'center', height: 40 }}
          onPress={() => navigation.navigate('TaskProfile', { task })}>
          <Text
            style={
              (styles.textTask,
                { alignSelf: 'center', justifyContent: 'center' })
            }
            ellipsizeMode="tail">
            {' '}
            {task?.id_Tiket}{' '}
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            height: 100,
          }}
          onPress={() => navigation.navigate('TaskProfile', { task })}>
          <Text style={[styles.textTask, { height: 80, alignSelf: 'center' }]}>
            {describtion}
          </Text>

          <View
            style={{
              flex: 1, flexDirection: 'row', borderTopWidth: 1,
              //backgroundColor: 'red' 
            }}>
            < Indicator task={task} myDaysApprove={myDaysApprove} />
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: 'column' }}>        
          
          <TouchableOpacity
            style={[
              styles.button,
              {
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                margin: 2,
              },
            ]}
            onPress={() => approve(task)}
          >
            <Text
              style={{
                fontSize: 10,
                lineHeight: 14,
                color: '#FFDE33',
              }}>
              принять
            </Text>
          </TouchableOpacity>          
          
          <TouchableOpacity
            style={[
              styles.button,
              {
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                margin: 2,
              },
            ]}
            onPress={() => refuse(task)}
          >
            <Text
              style={{
                fontSize: 10,
                lineHeight: 14,
                // flexDirection: 'row',
                color: '#FFDE33',
              }}>
              Отказ
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textTask: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
    alignSelf: 'center',
    borderColor: 'black',
  },

  button: {
    textAlign: 'center',
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
