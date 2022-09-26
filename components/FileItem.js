import React  from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default function FileItem({file, download, remove}) {
  
  return (
    <View style={{ borderColor: 'black',  borderLeftWidth: 1, borderRightWidth: 1, flexDirection: 'row', justifyContent:'space-between'}}>
         <Text style={{ paddingLeft:5, alignSelf: 'center', justifyContent: 'center' }}>            
            {file?.name}
          </Text> 
         <View style={{ borderColor: 'black',  flexDirection: 'row', justifyContent:'space-between'}}> 
         <Text style={{ paddingLeft:5, alignSelf: 'center', justifyContent: 'center', textDecorationLine: 'underline', color: 'green' }}
         onPress = {download}> 
            Скачать
          </Text> 
         <Text style={{ paddingLeft:5, alignSelf: 'center', justifyContent: 'center', textDecorationLine: 'underline' , color: 'red'  }}
         onPress = {remove}>            
            Удалить
          </Text> 
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

