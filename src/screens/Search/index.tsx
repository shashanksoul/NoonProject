import React from 'react';
import { FlatList, TextInput, View } from 'react-native';
import styles from './styles';
import { ProductList } from '../../components';
import {ProductSectionData} from '../../mock/mockData';
import ProductItem from '../../components/ProductItem';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
    const mergedData = ProductSectionData.map(item => item.data).reduce((acc, curr) => [...acc, ...curr], []);
    const {navigate} = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const [productData, setProductData] = React.useState(mergedData);


    const onProductClick = (item) => {
        navigate('Detail',{item});
    };

    const onChangeText = (txt) => {
    setSearchQuery(txt);

    const filteredProducts = mergedData.filter(item => item.name.includes(txt));
    setProductData(filteredProducts ?? mergedData);
    };

    return(
        <View style={styles.container}>
            <TextInput onChangeText={onChangeText} value={searchQuery} style={styles.textInput} placeholder="Search Product" />
            <FlatList numColumns={2} data={productData} renderItem={({item}) => <ProductItem item={item} onPress={() =>onProductClick(item)} /> }/>
        </View>
    );
};

export default SearchScreen;
