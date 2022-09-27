    import React, { useState, useEffect } from 'react';
    import DropDownPicker from 'react-native-dropdown-picker';
    import {
      View,
      StyleSheet,
      Text,
      TouchableOpacity,
      TextInput,
      FlatList,
    } from 'react-native';
    
    import FileItem from '../../components/FileItem';
    
    export default function ScreenTaskProfile({ route, navigation }) {
     // console.log('props',props?.navigation?.getParent());
      let task = route?.params?.task;
      //let files = task?.files;
    
      let files = [{ name: 'аватар вася.png' }, { name: 'аватар бася.png' }];
    
      let label = [
        {
          label: 'Высокий',
          value: 'high',
          containerStyle: { flexDirection: 'row', minHeight: 20, maxHeight: 20 },
        },
        {
          label: 'Средний',
          value: 'midle',
          containerStyle: { flexDirection: 'row', minHeight: 20, maxHeight: 20 },
        },
        {
          label: 'Низкий',
          value: 'low',
          containerStyle: { flexDirection: 'row', minHeight: 20, maxHeight: 20 },
        },
      ];
    
      const [heightDropDownPicker, setheightDropDownPicker] = useState(60);
      const [open, setOpen] = useState(true);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState(label);
      const [stateTitle, setTitle] = useState(task?.title);
      const [stateContent, setContent] = useState(task?.content);
    
      useEffect(() => {
        setheightDropDownPicker(open ? 125 : 65);
      }, [open]);
    
      const download = (file) => {
        file;
      };
      const remove = (file) => {
        file;
      };
    
      const renderItemFiles = ({ item, index }) => {
        return (
          <FileItem file={item} index={index} download={download} remove={remove} />
        );
      };
    
      return (
        <View style={styles.container}>
          <Text style={[styles.text, {}]}>Задача</Text>
    
          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              height: heightDropDownPicker,
            }}>
            <View
              style={{
                height: 60,
                width: 120,
                justifyContent: 'center',
              }}>
              <Text style={{ flex: 1 }}> {task?.id_Tiket} </Text>
              <Text style={{ flex: 1, borderTopWidth: 1, borderBottomWidth: 1 ,paddingLeft:5}}>
              {task?.registred}
              </Text>
    
              <DropDownPicker
                style={{
                  minHeight: 25,
                  maxHeight: 25,
                  backgroundColor: '#F2ECD7',
                  paddingLeft: 1,
                  //  flexDirection: 'row',
                  borderWidth: 0,
                }}
                onPress={() => {
                 // console.log(open);
                  setOpen(!open);
                }}
                placeholder="priority"
                dropDownDirection="Bottom"
                badgeStyle={{
                  //minHeight: 20, maxHeight: 20,
                  flexDirection: 'row',
                }}
                dropDownContainerStyle={{
                  borderWidth: 0,
                  backgroundColor: '#F2ECD7',
                  paddingStart: 5,
                }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={false}
                mode="BADGE"
                badgeColors={['D8D2BF', 'D8D2BF', 'D8D2BF']}
              />
            </View>
    
            <View
              style={{
                flex: 1,
    
                borderLeftWidth: 1,
              }}>
              <TextInput
                style={{
                  flex: 1,                  
                  textAlign: 'center',
                  
                  margin: 5,
                  backgroundColor: 'white',
                }}
                placeholder="title"
                value={stateTitle}
                multiline={true}
                onChangeText={setTitle}></TextInput>
            </View>
          </View>
    
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderTopWidth: 0,
            }}>
            <TextInput
              style={{
                flex: 1,
                textAlignVertical:'top', 
                
                margin: 5,
                backgroundColor: 'white',
              }}
              placeholder="content"
              value={stateContent}
              multiline={true}
              onChangeText={setContent}></TextInput>
          </View>
    
          <View>
            <FlatList data={files} renderItem={renderItemFiles} />
          </View>
    
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
            }}>
            <Text
              style={{
                flex: 1,
                paddingLeft: 5,
                alignSelf: 'center',
                justifyContent: 'center',
                //borderWidth: 1,
              }}>
              Время
            </Text>
            <Text
              style={{
                flex: 1,
                paddingLeft: 5,
                alignSelf: 'center',
                justifyContent: 'center',
                borderLeftWidth: 1,
              }}>
              Стоимость
            </Text>
          </View>
    
          <TouchableOpacity style={[styles.button, {marginTop:2,marginBottom:2}]} onPress={() => save(task)}>
            <Text style={styles.buttonText}>Сохранить</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {marginTop:2,marginBottom:2}]} onPress={() => register(task)}>
            <Text style={styles.buttonText}>Зарегистрировать</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {marginTop:2,marginBottom:2}]} onPress={() => cancel(task)}>
            <Text style={styles.buttonText}>Отменить</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {marginTop:2,marginBottom:2}]} onPress={() => approve(task)}>
            <Text style={styles.buttonText}>Принять</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {marginTop:2,marginBottom:2}]} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Назад</Text>
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
      text: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 20,
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
    