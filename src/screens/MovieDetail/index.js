import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Gap } from '../../component';
import { key, URI, URIImage } from '../../utils';
import {WebView} from 'react-native-webview';

const MovieDetail = ({navigation, route}) => {
    const {videoId,title} = route.params

    const [id, setId] = React.useState('');
    const [movieDetail, setMovieDetail] = React.useState('');

    React.useEffect(() => {
        const idItem = route.params.id;
       
        async () => {
            try {
                id = await AsyncStorage.getItem('id')
                id = JSON.parse(id)
                if(id !== null) setId({...id})
            } 
            catch (err) {
                console.log(err)
            }
        }
        function get() {
            fetch(`${URI}/${idItem}?api_key=${key}`)   
            .then(response => response.json())   
            .then(json => {
                let result = json
                setMovieDetail(result)
                console.log('data search: ', result)
            })
            .catch(function(error) {
            console.log(error);
            });
        }
            get()
    }, [])


    return (
        <View style={style.bg}>
            <View>
                <Image 
                source={{uri: `${URIImage}/${movieDetail.poster_path}`}}
                style={style.img}/>
            </View>
            <Gap height={15}/>
            <Text style={style.title}>{movieDetail.title}</Text>
            <Gap height={15}/>
            <Text style={style.date}>Release date: {movieDetail.release_date}</Text>
            <Gap height={14}/>
            <View>
                <Text style={style.overview}>Overview</Text>
                <Text style={style.overviewMovie}>{movieDetail.overview}</Text>
            </View>
            <Gap height={20}/>
            <View style={style.webviewWrapper}>
                <View style={style.webview}>
                    <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri:`${movieDetail.homepage}`}}
                    />
                </View>
            </View>
        </View>
    )
}

export default MovieDetail;

const style = StyleSheet.create({
    bg: {
        backgroundColor: '#22211F', 
        width: '100%', 
        height: '100%'
    },
    img: {
        alignSelf: 'center',  
        height: 230, 
        width: '100%', 
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 'auto',
    },
    title: {
        color: '#FF7314', 
        fontWeight: 'bold', 
        fontSize: 30, 
        marginLeft: 30
    },
    date: {
        color: '#f4f4f4', 
        marginLeft: 15
    },
    overview: {
        color: '#f4f4f4', 
        marginLeft: 15, 
        fontSize: 18, 
        marginBottom: 8
    },
    overviewMovie: {
        color: '#f4f4f4', 
        marginLeft: 15, 
        marginRight: 10
    },
    webviewWrapper: {flex:1},
    webview: {
        width:'97%',
        height:200, 
        marginLeft: 5, 
        marginRight: 5
    }
  });