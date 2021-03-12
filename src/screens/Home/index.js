import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Gap } from '../../component';
import { img1, img2 } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { key, URI, URIImage } from '../../utils';

const Home = ({navigation}) => {

    const [movie, setMovie] = React.useState(null)
    const [id, setId] = React.useState(null)

    React.useEffect(() => {
        function get() {
            fetch(`${URI}/popular?api_key=${key}&language=en-US&page=1`)   
            .then(response => response.json())   
            .then(json => {
                let result = json.results
                setMovie(result)
                // console.log('data search: ', result)
            })
            .catch(function(error) {
            console.log(error);
            });
        }
            get()
    }, [])

    const renderItem = ({item, index}) => {
        return (
            <View style={style.cardMovie}
            >
                <TouchableOpacity style={style.card}
                onPress={() => { 
                    navigation.navigate('MovieDetail', {id: item.id}) 
                    async () => {
                    try { await AsyncStorage.setItem('id', id) }
                    catch(err) { console.log(err) }
                    }    
                }}>
                    <Image 
                    source={{uri: `${URIImage}/${item.poster_path}`}}
                    style={{height: 150, width: 143, marginTop: 0}}/>
                    <Text style={{color: '#fff', fontSize: 14, marginBottom: 10, display: 'flex', justifyContent: 'center', alignSelf: 'center', fontWeight: 'bold', marginTop: 5}}>{item.title}</Text>  
                </TouchableOpacity>
                
            </View>
        )
    }

    return (
        <>
            <View style={style.bg}>
                <Image
                    style={style.img}
                    source={img1}
                />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={movie}
                    renderItem={renderItem}
                    />
                
            </View>
            
        </>
    )
}

export default Home;



const style = StyleSheet.create({
    bg: {
        backgroundColor: '#22211F',
        width: '100%',
    },
      img: {
        alignSelf: 'center',  
        height: 250, 
        width: '100%', 
        marginTop: 0,
        marginBottom: 'auto'
    },
    cardMovie: {
        marginTop: 30,

       
        
    },
    card: {
        width: `40%`,
        backgroundColor: '#393534',
        display: 'flex',
        flexWrap: 'wrap'
    } 
    
  });