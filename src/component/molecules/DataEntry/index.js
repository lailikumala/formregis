import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gap } from '../../atom';

const DataEntry = ({firstName, lastName, jobdes, gender, email, checked, address, phone}) => {

    return  (
        <View>
            <View style={style.dataEntry}>
                <Text style={style.title}>FullName: </Text>
                <View style={style.nameWrapper}>
                <Text style={style.value}>{firstName} {lastName}</Text>
                </View>
            </View>
            <Gap height={25}/>
            <View>
                <Text style={style.title}>Jobdes: </Text>
                <View style={style.jobdes}>
                    <Text >{jobdes}</Text>
                </View>
            </View>
            <Gap height={25}/>
            <View style={style.dataEntry}>
                <Text style={style.title}>Gender: </Text>
                <View style={style.genderWrapper}>
                <Text style={style.value}>{gender}</Text>
                </View>
            </View>
            <Gap height={25}/>
            <View style={style.dataEntry}>
                <Text style={style.title}>Email: </Text>
                <View style={style.gmailWrapper}>
                <Text style={style.value}>{email}</Text>
                </View>
            </View>
            <Gap height={25}/>
            <View style={style.dataEntry}>
                <Text style={style.title}>Have a laptop/PC: </Text>
                <View style={style.toolsWrapper}>
                <Text style={style.value}>{checked}</Text>
                </View>
            </View>
            <Gap height={25}/>
            <View style={style.dataEntry}>
                <Text style={style.title}>Mobile Number: </Text>
                <View style={style.mobileWrapper}>
                <Text style={style.value}>{phone}</Text>
                </View>
            </View>
            <Gap height={25}/>
            <View>
                <Text style={style.title}>Address: </Text>
                <View style={style.jobdes}>
                    <Text>{address}</Text>
                </View>
            </View>
         
        </View>
    )
}

export default DataEntry;

const style = StyleSheet.create({
    dataENtry: {
        display: 'flex'
     },
     
     title: {
         fontSize: 16,  
         color: '#FF7314',
         fontWeight: 'bold',
         marginLeft: 30,
         
     },
     nameWrapper: {
         alignItems: 'flex-end',
         marginRight: 160,
         
     },
     value: {
         color: '#393534',
         marginVertical: -20
     },
     jobdes: {
        width: '80%', 
        marginLeft: 30, 
        marginTop: 20
     },
     genderWrapper: {
        alignItems: 'flex-end',
        marginRight: 190, 
    },
    gmailWrapper: {
        alignItems: 'flex-end',
        marginRight: 75, 
    },
    toolsWrapper: {
        alignItems: 'flex-end',
        marginRight: 160, 
    },
    mobileWrapper: {
        alignItems: 'flex-end',
        marginRight: 110, 
    },
});
