import React from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {  DataEntry, Gap } from '../../component';
import AsyncStorage from '@react-native-community/async-storage';

const Confirmation = ({navigation, route}) => {

    const firstName = route.params.firstName;
    const lastName = route.params.lastName;
    const jobdes = route.params.jobdes;
    const gender = route.params.gender;
    const email = route.params.email;
    const checked = route.params.checked;
    const address = route.params.address;
    const phone = route.params.phone;

    const [dataUser, setDataUser] = React.useState('');

    React.useEffect(() => {
        const load = async () => {
            try {
                dataUser = await AsyncStorage.getItem('dataUser')
                dataUser = JSON.parse(dataUser)
                if(dataUser !== null) setDataUser({...dataUser})
            } 
            catch (err) {
                console.log(err)
            }
        }
        load()
    }, [])

    const removedataUser = async () => {
        try {
            await AsyncStorage.clear()
            navigation.navigate('SubmitSuccess')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <ScrollView>
            <Gap height={20}/>
            <View style={style.numWrapper}>
                <Text style={style.num}>03</Text>
            </View>
            <Text style={style.info}>Confirmation data of entry</Text>
            <Gap height={15}/>
            <DataEntry
                firstName={firstName}
                lastName={lastName}
                jobdes={jobdes}
                gender={gender}
                email={email}
                checked={checked}
                phone={phone}
                address={address}
            />
            <Gap height={15}/>
            <View style={style.buttomWrapper}>
                <RectButton 
                    style={style.back}
                    onPress={()=> navigation.navigate('InformationB')}
                    >
                    <Text style={style.button}>Back</Text>
                </RectButton>
                <RectButton 
                    style={style.submit}
                    onPress={()=> removedataUser()}
                    >
                    <Text style={style.button}>Submit</Text>
                </RectButton>
            </View>
        </ScrollView>
    )
}

export default Confirmation;

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
    submit: {
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