import React from 'react';
import {View, Text, Image, Dimensions, StatusBar, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { img1, img2 } from '../../assets';
const {width: screenWidth} = Dimensions.get('window');

const ENTRIES1 = [
  {
    title: 'One Piece',
    image: img1
  },
  {
    title: 'Yakusoku No Neverland',
    image: img2,
  },
  {
    title: 'One Piece',
    image: img1,
  },
  {
    title: 'Yakusoku No Neverland',
    image: img2
  },
];

const Welcome = ({navigation}) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [entries, setEntries] = React.useState([]);
  const carouselRef = React.useRef(null);

  React.useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={style.imgWrapper}>
        <Image
          style={style.img}
          source={item.image}
        />
        <Text style={style.title}>
          {item.title}
        </Text>
      </View>
    );
  };

  const renderPagination = () => (
    <Pagination
      dotsLength={entries.length}
      activeDotIndex={activeSlide}
      dotStyle={style.dotStyles}
      inactiveDotStyle={style.inactiveDotStyles}
    />
  );

  return (
    <>
      <StatusBar />
      <ScrollView style={style.bg}>
        <View contentInsetAdjustmentBehavior="automatic">
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 30}
            data={entries}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          {renderPagination()}

          <View style={style.buttonWrapper}>
            <Button
              onPress={() => navigation.navigate('InformationA')}
              style={style.btnRegis}>
              <Text style={style.regis}>
                Create My Account
              </Text>
            </Button>
            <Button
              onPress={() => navigation.navigate('Login')}
              mode="outlined"
              style={style.btnLogin}>
              <Text style={style.login}>login</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Welcome;


const style = StyleSheet.create({
  imgWrapper: {
    alignItems: 'center'
  },
  img: {
    alignSelf: 'center',  
    height: 350, 
    width: '97%', 
    marginTop: 30
  },
  title: {
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontSize: 25, 
    color: '#FF7314', 
    marginTop: 30
  },
  dotStyles: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#FF7314',
  },
  inactiveDotStyles: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#F4F4F4',
  },
  bg: {
    backgroundColor: '#22211F', 
    height: '100%'
  },
  buttonWrapper: {
    marginTop: 10, 
    marginLeft: 20, 
    marginRight: 20
  },
  btnRegis: {
    justifyContent: 'center',
    backgroundColor: '#FF7314',
    borderRadius: 10,
    height: 60,
    elevation: 5,
  },
  regis: {
    color: '#22211F', 
    margin: '50%'
  },
  btnLogin: {
    justifyContent: 'center',
    borderRadius: 10,
    height: 60,
    marginTop: 20,
    borderColor: '#FF7314'
  },
  login: {
    color: '#FF7314', 
    margin: '50%'
  }

});