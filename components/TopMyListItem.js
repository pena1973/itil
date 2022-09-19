import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TopListItem() {
  return (
    <View style={{ borderColor: 'black', borderWidth: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View style={{ width: 70, justifyContent: 'center' }}>
          <Text
            style={styles.textTask}>
            ID
          </Text>
        </View>

        <View style={{ flex: 1, borderRightWidth: 1, borderLeftWidth: 1 }}>
          <Text
            style={[styles.textTask, { height: 20,}]}>
            Описание
          </Text>
        </View>
        <View style={[styles.textTask, { width: 60 }]}>
          <Text style={styles.textTask}>(р/ч)</Text>
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
    justifyContent: 'center',
    borderColor: 'black',
  },
});
