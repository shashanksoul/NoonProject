import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SellingFast from './SellingFast';

const ProductItem = ({item, onPress}) => (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.container}>
       <View>
       <Image style={styles.thumbnail} source={{uri: item.thumbnail}} />
       {item.fastSelling && <SellingFast />}
       </View>
        <View>
            <Text>{item.name}</Text>
            <View style={styles.priceContainer}>
            <Text style={styles.ogPrice}>{`${item.originalPrice} ₹`}</Text>
            <Text>{`${item.price} ₹`}</Text>
            </View>
        </View>

   </TouchableOpacity>
);

const styles = StyleSheet.create({
container: {flex:0.5, margin: 5, borderRadius: 8, padding: 10, borderWidth: 1, borderColor:'grey'},
thumbnail: {height: 200, width: 150, borderRadius: 8},
priceContainer: {flexDirection:'row'},
ogPrice: {color:'grey', textDecorationLine:'line-through'},
});

export default ProductItem;
