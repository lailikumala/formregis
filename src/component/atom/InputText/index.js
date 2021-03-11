import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Gap from '../Gap';

const InputText = ({label, placeholder, ...rest}) => {
    return  (
        <View style={style.inputWrapper}>
            <Text style={style.label}>{label}</Text>
            <Gap height={10}/>
            <TextInput style={style.input} placeholder={placeholder} {...rest}/>
        </View>
    )
}

export default InputText;

const style = StyleSheet.create({
    inputWrapper: {
        marginBottom: 16,
        backgroundColor: '#F4F4F4'
    },
    label: {
        fontSize: 16,
        color: '#FF7314',
        marginLeft: 10,
        fontWeight: 'bold'
    },
    input: {
        padding: 12,
        borderRadius: 10,
        width: '100%',
       borderWidth: 1
    },
  });