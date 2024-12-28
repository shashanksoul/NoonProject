import React  from 'react';
import { StyleSheet, Text } from 'react-native';
const SellingFast: React.FC = () => {


    return(
        <>
        <Text style={styles.sellingFast} children="Selling Fast"/>
        </>
    );
};


const styles = StyleSheet.create({
    sellingFast: {
        backgroundColor:'red',
        color:'white',
        position:'absolute',
        padding: 4,
        borderTopLeftRadius:8,
        borderBottomRightRadius:8}});

export default SellingFast;
