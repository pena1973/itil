import React  from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default function QueueTaskItem({ task }) {
  var describtion = task?.content.slice(0, 115);
  if (describtion.length < task?.content.length) {
    describtion = describtion + '...';
  }

  return (
    <View style={{ borderColor: 'black', borderWidth: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View style={{ width: 70, justifyContent: 'center' }}>
          <Text
            style={
              (styles.textTask,
              { alignSelf: 'center', justifyContent: 'center' })
            }>
            {' '}
            {task?.id_Tiket}{' '}
          </Text>
        </View>

        <View style={{ flex: 1, borderRightWidth: 1, borderLeftWidth: 1 }}>
          <Text
            style={[styles.textTask, { height: 70, alignSelf: 'center' }]}
            ellipsizeMode="tail">
            {describtion}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                borderTopWidth: 1,
                borderRightWidth: 1,
              }}>
              <Text style={(styles.textTask, { lineHeight: 12 })}>
                {task?.status}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                borderTopWidth: 1,
              }}>
              <Text style={(styles.textTask, { lineHeight: 12 })}>
                {task?.priority}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ width: 60, justifyContent: 'center' }}>
          <Text style={styles.textTask}>{task?.estime}</Text>
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
  
});

