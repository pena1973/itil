import React, { useState, useEffect } from 'react';

import { StyleSheet } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function DropdownButton({
  expanded,
  setOpenMy,
  placeholder,
  selection,
  label,
}) {
  //const [open, setOpen] = useState(expanded);
  const [value, setValue] = useState(selection);
  const [items, setItems] = useState(label);

  return (
    <DropDownPicker
    //dropDownMaxHeight={200}
      style={[
      //  styles.buttonUp,
        { minHeight: 40,
          maxHeight: 40,
          backgroundColor: '#F2ECD7',
          paddingLeft: 5,
          flexDirection: 'row',
        },
      ]}
      placeholder={placeholder}
      dropDownDirection="Bottom"
      badgeStyle={{ flexDirection: 'row'}}
      dropDownContainerStyle={[
        styles.buttonUp,
        {          
          backgroundColor: '#F2ECD7',
          paddingStart: 5,       
        },
      ]}      
      open={expanded}
      value={value}
      items={items}
      setOpen={setOpenMy}
      setValue={setValue}
      setItems={setItems}
      multiple={true}
      mode="BADGE"
      badgeColors={['D8D2BF', 'D8D2BF', 'D8D2BF']}
      // badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
    />
  );
}
const styles = StyleSheet.create({
  buttonUp: {
   // backgroundColor: '',
 //   shadowColor: '#000',
    //borderRadius: 16,
   // borderColor: '#F2ECD7',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.31,
  //   shadowRadius: 6.11,
  //   elevation: 5,
   },
});
