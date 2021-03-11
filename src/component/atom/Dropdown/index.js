import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import  Dropdown  from 'react-native-modal-dropdown';

const MyDropdown = ({label, options, ...rest}) => {
    return  (
        <View>
          <Text style={style.label}>{label}</Text>
          <Dropdown
          options={options}
            style={style.dropdownWrapper}
            textStyle={style.textStyle}
            dropdownStyle={style.dropdownStyle}
            {...rest}
          />
        </View>
        
    )
}

export default MyDropdown;

const style = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#FF7314',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  dropdownWrapper: {
    backgroundColor: '#f4f4f4',
    width: '96%',
    height: 60,
    margin: 5,
    borderWidth: 1,
    borderRadius: 12
  },
  textStyle: {
    color: '#444',
    width: '100%',
    height: 60,
    margin: 10,
    fontSize: 16,
    lineHeight: 35
  },
  dropdownStyle: {
    backgroundColor: '#f4f4f4',
    width: '96%',
    height: 100,
    marginLeft: 0,
    marginRight: 8,
    marginTop: -20,
    borderRadius: 12
  },
});