import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Gap } from '../../component';
import { img1, img2 } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';

const Home = ({navigation}) => {

    const [movie, setMovie] = React.useState(null)

    React.useEffect(() => {
        function get() {
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=6e74efb6aee7895253b64d45ebddac20&language=en-US&page=1')   
            .then(response => response.json())   
            .then(json => {
                let result = json.results
                setMovie(result)
                console.log('data search: ', result)
            })
            .catch(function(error) {
            console.log(error);
            });
        }
            get()
    }, [])

    const renderItem = ({item, index}) => {
        return (
            <View style={{marginTop: 30}}>
                <Image 
                source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
                style={{height: 120, width: 85, display: 'flex', justifyContent: 'center', alignSelf: 'center'}}/>
                <Text style={{color: '#fff', fontSize: 14, marginBottom: 10, display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>{item.title}</Text>
                <Text style={{color: '#fff', fontSize: 14, marginBottom: 10, display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>{item.release_date}</Text>
        
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
                {/* <View style={style.card}>
                    <View style={style.info}>
                        <TouchableOpacity style={style.listWrapper}>
                            <FontAwesomeIcon icon={ faPlus } size={15}  color={'#F4f4F5'} marginTop={3}/>
                            <Text style={style.name}>List</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={style.line}>|</Text>
                        </View>
                        <TouchableOpacity style={style.playWrapper}>
                            <FontAwesomeIcon icon={ faPlay } size={15}  color={'#F4f4F5'}marginTop={3}/>
                            <Text style={style.name}>Play</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
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
        // height: '100%' 
    },
      img: {
        alignSelf: 'center',  
        height: 250, 
        width: '100%', 
        marginTop: 0,
        marginBottom: 'auto'
    },
    // card: {
    //     backgroundColor: '#393534',
    //     width: '50%',
    //     padding: 10,
    //     marginVertical: -400,
    //     marginBottom: 'auto',
    //     alignSelf: 'center',
    //     borderRadius: 8,
    //     position: 'relative',
    // },
    // info: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-around'
    // },
    // listWrapper: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     marginTop: 4    
    // },
    // name: {
    //     fontSize: 15,
    //     color: '#F4F4F4',
    //     fontWeight: 'bold',
    //     marginLeft: 5
    // },
    // line: {
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     color: '#F4F4F4'
    // },
    // playWrapper: {
    //     display: 'flex',
    //     flexDirection: 'row' ,
    //     marginTop: 4
    // },
    // cardMovie: {
    //     display: 'flex',
    //     justifyContent: 'space-between'
    // },
    // movie: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     margin: 6
    // }
      
    
  });