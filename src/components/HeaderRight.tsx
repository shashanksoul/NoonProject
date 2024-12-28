import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const HederRight = () =>{

    const {products} = useSelector((state) => state.cart);
    const {navigate} = useNavigation();

    const onCartClick = () => {
        navigate('Cart');
    };

    const onSearchClick = () => {
      navigate('Search');
    };

    return(
        <>
       <TouchableOpacity onPress={onSearchClick} >
       <Text>🔍</Text>
       </TouchableOpacity>
        <TouchableOpacity onPress={onCartClick}>
        <Text>🛒 {products.length}</Text>
        </TouchableOpacity>
        </>
    );
};

export default HederRight;
