import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Gap } from '../../component';

const SubmitSuccess = ({navigation}) => {
    return (
        <View style={style.submit}>
            <Gap height={20}/>
            <View style={style.numWrapper}>
                <Text style={style.num}>04</Text>
            </View>
            <Gap height={200}/>
            <Text style={style.success}>"Thank you for submit form"</Text>
        </View>
    )
}

export default SubmitSuccess;



const style = StyleSheet.create({
    submit: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    numWrapper: {
        marginRight: 30,
        marginLeft: 'auto'
    },
    num: {
        fontWeight: 'bold',
        color: '#FF7314',
        fontSize: 17
    },
    success: {
        
        fontWeight: 'bold',
        fontSize: 17,
        color: '#FF7314'
    }
    
  });