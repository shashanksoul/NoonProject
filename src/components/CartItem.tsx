import React from 'react';
import { Button, StyleSheet, Text, View,Image } from 'react-native';

type CartItemProps = {
    item: any;
    enableUpdateProduct?: boolean;
    onRemovePress?: () => void;
    onAddPress?: () => void;
}

const CartItem: React.FC<CartItemProps> = ({item,onAddPress, onRemovePress, enableUpdateProduct=true}) => {

    return(  <View style={styles.container}>
                <View style={styles.infoContainer}>
                <Image style={styles.thumbnail} source={{uri: item.thumbnail}}/>
                <View style={styles.productInfoContainer}>
                    <Text>{item.name}</Text>
                    <Text>{`${item.price} ₹`}</Text>
                </View>
                </View>
               <View style={styles.updateProductContainer}>
                { enableUpdateProduct && <Button onPress={onRemovePress} title="-" />}
                {!enableUpdateProduct && <Text> Quntity:</Text>}
                <Text>{item.qty}</Text>
                {enableUpdateProduct && <Button onPress={onAddPress} title="+" />}
                </View>
            </View>);
};

const styles = StyleSheet.create({
    container: {margin: 10},
    infoContainer: {flexDirection:'row'},
    thumbnail: {height: 50, width: 50},
    productInfoContainer: {padding: 10},
    updateProductContainer: {flexDirection:'row', alignItems:'center'},
})

export default CartItem;
