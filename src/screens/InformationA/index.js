import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, ToastAndroid } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {  Gap, InputText, MyDropdown, TextArea } from '../../component';


const InformationA = ({navigation, route}) => {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [jobdes, setJobdes] = React.useState('');
    const [gender, setGender] = React.useState('woman');
    const [email, setEmail] = React.useState('');

    const onsubmit = async () => {
        try {
            await AsyncStorage.setItem('dataUser',JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                jobdes: jobdes,
                gender: gender,
                email: email
            }))
            if(firstName && lastName && jobdes && gender && email) {
                navigation.navigate('InformationB', {
                    firstName: firstName,
                    lastName: lastName,
                    jobdes: jobdes,
                    gender: gender,
                    email: email
                }),
                navigation.navigate('InformationB')
            } 
            else if(!firstName && !lastName && !jobdes && !gender && !email) {
                ToastAndroid.show(`you must fill in the data correctly`, ToastAndroid.SHORT)
                return false
            }
            else if(!lastName) {
                ToastAndroid.show('lastname is required', ToastAndroid.SHORT)
                return false
            }
            else if(!jobdes) {
                ToastAndroid.show('jobdes is required', ToastAndroid.SHORT)
                return false
            }
            else if(!gender) {
                ToastAndroid.show('gender is required', ToastAndroid.SHORT)
                return false
            }
            else if(!email) {
                ToastAndroid.show('email is required', ToastAndroid.SHORT)
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
                <Text style={style.num}>01</Text>
            </View>
            <Text style={style.info}>Information A</Text>
            <Gap height={20}/>
            <View style={style.inputWrapper}>
                <View style={style.firstname}>
                    <InputText
                        label={'FirstName'}
                        placeholder={'firstname'}
                        width={170}
                        onChangeText={(e) => setFirstName(e)}
                    />
                </View>
                <View>
                    <InputText
                        label={'LastName'}
                        placeholder={'lastName'}
                        width={170}
                        onChangeText={(e) => setLastName(e)}
                    />
                </View>
            </View>
            <Gap height={20}/>
           <TextArea
                label={'Jobdes'}
                placeholder={'Jobdes'}
                numberOfLines={10}
                multiline={true}
                onChangeText={(e) => setJobdes(e)}
           />
            <Gap height={20}/>
            <MyDropdown
                options={['Man', 'Woman']}
                label={'Gender'}
                onChangeText={(e) => setGender(e)}
                value={gender}    
            />
            <Gap height={20}/>
            <View style={style.input}>
                <InputText
                    label={'Email'}
                    placeholder={'Email'}
                    onChangeText={(e) => setEmail(e)}
                />
            </View>
            <Gap height={20}/>
            <RectButton 
                style={style.buttomWrapper}
                onPress={()=> onsubmit()}
                >
                <Text style={style.button}>Next</Text>
            </RectButton>
        </ScrollView>
    )
}

export default InformationA;



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
        width: '40%',
        marginRight: 8,
        marginLeft: 'auto',
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