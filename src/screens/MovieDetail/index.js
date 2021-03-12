import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
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
        <View>
            <Text>detai ini</Text>
            <Image 
                source={{uri: `${URIImage}/${movieDetail.poster_path}`}}
                style={{height: 150, width: 143, marginTop: 0}}/>
            <Gap height={20}/>
            <Text>{movieDetail.title}</Text>
            <Gap height={20}/>
            <Text>{movieDetail.release_date}</Text>
            <Gap height={20}/>
            <Text>{movieDetail.overview}</Text>
            <Gap height={30}/>
            <TouchableOpacity>
                <Text>{movieDetail.homepage}</Text>
            </TouchableOpacity>
            <WebView
            source={{uri: `${movieDetail.homepage}`}}
            style={{marginTop: 20, width: '100%', height: 200}}/>
            <WebView
            />
           

           <View style={{
           flex:1,
        
        }}>
           <View style={{
               width:"97%",
               height:200,
               marginLeft: 5,
               marginRight: 5
           }}>
              <WebView
              javaScriptEnabled={true}
              domStorageEnabled={true}
               source={{uri:`${movieDetail.homepage}`}}
              />

           </View>
         
           <View
             style={{borderBottomWidth:1}}
           />
       </View>

        </View>
    )
}

export default MovieDetail;

const style = StyleSheet.create({
    
    
  });