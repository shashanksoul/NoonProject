import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductItem from './ProductItem';
import { useNavigation } from '@react-navigation/native';

const ProductList  = ({sections, style = {}}) => {

    const {navigate} = useNavigation();


    const onProductClick = (item) => {
      navigate('Detail',{item});
    };

return(
    <ScrollView style={[styles.container, style]}>
    {sections?.map((section: any)=> (
        <View key={section.id}>
            <Text style={styles.title}>{section.title}</Text>
            <FlatList
            data={section.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={({id}) => id}
            renderItem={(data) => <ProductItem onPress={() => onProductClick(data.item) } {...data}/>}/>
            </View>
    ))}
    </ScrollView>
);
};

const styles = StyleSheet.create({
    container: {marginTop: 200, marginHorizontal: 10},
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 5,
    },
});

export default ProductList;
