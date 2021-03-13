import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { img1 } from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';
import { key, URI, URIImage } from '../../utils';


const Home = ({navigation}) => {

    const [movie, setMovie] = React.useState(null)
    const [id, setId] = React.useState(null)
    const numColumns = 2

    React.useEffect(() => {
        function get() {
            fetch(`${URI}/popular?api_key=${key}&language=en-US&page=1`)   
            .then(response => response.json())   
            .then(json => {
                let result = json.results
                setMovie(result)
               
            })
            .catch(function(error) {
            console.log(error);
            });
        }
            get()
    }, [])

    const renderItem = ({item}) => {
        return (
            <View style={style.cards}>
                <TouchableOpacity
                    onPress={() => { 
                    navigation.navigate('MovieDetail', {id: item.id}) 
                    async () => {
                    try { await AsyncStorage.setItem('id', id) }
                    catch(err) { console.log(err) }
                    }    
                }}>
                    <Image 
                    source={{uri: `${URIImage}/${item.poster_path}`}}
                    style={style.imgCard}/>
                    <Text style={style.title}>{item.title}</Text>  
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
                <View>
                    <Text style={style.popular}>Popular</Text>
                </View>
                
                <FlatList
                    data={movie}
                    renderItem={renderItem}
                   numColumns={numColumns}
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
    cards: {
        marginTop: 30, 
        width: '40%', 
        backgroundColor: '#393534', 
        marginLeft: 24
    },
   popular: {
       fontSize: 20,
       color: '#f4f4f4',
       fontWeight: 'bold',
       marginTop: 20,
       marginLeft: 30
   },
   imgCard: {
       height: 150, 
       width: '100%', 
       marginTop: 0
    },
    title: {
        color: '#fff', 
        fontSize: 14, 
        marginBottom: 10, 
        display: 'flex', 
        justifyContent: 'center', 
        alignSelf: 'center', 
        fontWeight: 'bold', 
        marginTop: 5
    }
    
  });