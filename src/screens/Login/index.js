import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, ToastAndroid } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {  Gap, InputText } from '../../component';


const Login = ({navigation, route}) => {

    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const onsubmit = async () => {
        try {
            await AsyncStorage.setItem('dataUser',JSON.stringify({
                email: email,
                phone: phone
            }))
            if(email && phone) {
                navigation.navigate('Home', {
                    email: email,
                    phone: phone
                }),
                navigation.navigate('Home')
            } 
            else if(!email && !phone) {
                ToastAndroid.show(`you must fill in the data correctly`, ToastAndroid.SHORT)
                return false
            }
            else if(!phone) {
                ToastAndroid.show('phone is required', ToastAndroid.SHORT)
                return false
            }
        }
        catch (err) {
            console.log(err)
        }
        
    }

    return (
        <ScrollView>
            <Gap height={100}/>
            <Text style={style.info}>Login</Text>
            <Gap height={70}/>
            <View style={style.input}>
                <InputText
                    label={'Email'}
                    placeholder={'Email'}
                    onChangeText={(e) => setEmail(e)}
                />
            </View>
            <Gap height={0}/>
            <View style={style.input}>
                <InputText
                    label={'Phone'}
                    placeholder={'Phone'}
                    onChangeText={(e) => setPhone(e)}
                />
            </View>
            <Gap height={30}/>
            <RectButton 
                style={style.buttomWrapper}
                onPress={()=> onsubmit()}
                >
                <Text style={style.button}>Login</Text>
            </RectButton>
        </ScrollView>
    )
}

export default Login;



const style = StyleSheet.create({
    info: {
        color: '#FF7314',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 30
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    input: {
       margin: 5
   },
    buttomWrapper: {
        fontSize: 16,
        width: '97%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 12,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#FF7314'
   },
    button: {
        color: '#F4F4F4',
        fontWeight: 'bold',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center',
        padding: 13
    }
    
  });