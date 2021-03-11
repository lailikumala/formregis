import React from 'react';
import { StyleSheet, View, Text, ScrollView, ToastAndroid } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {  Gap, InputText, TextArea } from '../../component';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';


const InformationB = ({navigation, route}) => {

    const [checked, setChecked] = React.useState('yes');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const firstName = route.params.firstName;
    const lastName = route.params.lastName;
    const jobdes = route.params.jobdes;
    const gender = route.params.gender;
    const email = route.params.email;

    const onSubmit = async () => {
        try {
            await AsyncStorage.setItem('dataUser',JSON.stringify({
                checked: checked,
                address: address,
                phone: phone
            }))
            if(checked && address && phone) {
                navigation.navigate('Confirmation', {
                    firstName: firstName,
                    lastName: lastName,
                    jobdes: jobdes,
                    gender: gender,
                    email: email,
                    checked: checked,
                    address: address,
                    phone: phone,
                    
                }),
                navigation.navigate('Confirmation')
            }
            else if(!address) {
                ToastAndroid.show('address is required', ToastAndroid.SHORT)
                
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
            <Gap height={20}/>
            <View style={style.numWrapper}>
                <Text style={style.num}>02</Text>
            </View>
            <Text style={style.info}>Information B</Text>
            <Gap height={30}/>
            <View>
                <Text style={style.label}>Have a laptop / PC</Text>
                <Gap height={20}/>
                <View style={style.radioButton}>
                    <RadioButton 
                        value={'yes'}
                        status={checked === 'yes' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('yes')}
                    />
                    <Gap width={20}/>
                    <RadioButton
                        value={'no'}
                        status={checked === 'no' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('no')}
                    />
                </View>
            </View>
            <Gap height={30}/>
            <TextArea
                label={'Address'}
                placeholder={'Address'}
                numberOfLines={10}
                multiline={true}
                onChangeText={(e) => setAddress(e)}
            />
            <Gap height={30}/>
            <View style={style.input}>
                <InputText
                    label={'Mobile Number'}
                    placeholder={'Mobile Number'}
                    onChangeText={(e) => setPhone(e)}
                />
            </View>
            <Gap height={100}/>
            <View style={style.buttomWrapper}>
                <RectButton 
                    style={style.back}
                    onPress={()=> navigation.navigate('InformationA')}
                    >
                    <Text style={style.button}>Back</Text>
                </RectButton>
                <RectButton 
                    style={style.next}
                    onPress={()=> onSubmit()}
                    >
                    <Text style={style.button}>Next</Text>
                </RectButton>
            </View>
        </ScrollView>
    )
}

export default InformationB;

const style = StyleSheet.create({
    numWrapper: {
        marginRight: 30,
        marginLeft: 'auto'
    },
    num: {
        fontWeight: 'bold',
        color: '#FF7314',
        fontSize: 17
    },
    info: {
        color: '#FF7314',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 30
    },
    label: {
        color: '#FF7314',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10
    },
    radioButton: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 28
    },
    input: {
       margin: 5
   },
    buttomWrapper: {
        display: 'flex',
        flexDirection: 'row',
   },
    back: {
        fontSize: 16,
        width: '40%',
        marginLeft: 'auto',
        borderRadius: 12,
        margin: 5,
        backgroundColor: '#393534'
    },
    next: {
        fontSize: 16,
        width: '40%',
        marginRight: 'auto',
        borderRadius: 12,
        margin: 5,
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