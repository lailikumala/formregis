import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Gap from '../Gap';

const TextArea = ({label, placeholder, ...rest}) => {
    return  (
        <View style={style.textareaWrapper}>
            <Text style={style.label}>{label}</Text>
            <Gap height={10}/>
            <TextInput style={style.textarea} placeholder={placeholder} {...rest}/>
        </View>
    )
}

export default TextArea;

const style = StyleSheet.create({
    inputWrapper: {
       padding: 5,
       borderWidth: 1
    },
    label: {
        fontSize: 16,
        color: '#FF7314',
        marginLeft: 10,
        fontWeight: 'bold'
    },
    textarea: {
        height: 100,
        justifyContent: 'flex-start',
        borderWidth: 1,
        margin: 5,
        borderRadius: 8
    },
  });