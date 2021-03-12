import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovieItem = (props) => {
    const {title, poster_path, rate, overview} = props;

    return  (
        <View style={style.cardItem}>
            <Text>card</Text>
        </View>
    )
}

export default MovieItem;

const style = StyleSheet.create({
    cardItem: {
        backgroundColor: '#ff7314',
        padding: 20,
        width: '35%'
    }
});