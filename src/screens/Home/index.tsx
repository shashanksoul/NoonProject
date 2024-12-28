import React from 'react';
import {View, Text } from 'react-native';
import { Banner, ProductList } from '../../components';
import styles from './styles';
import { BannerData, ProductSectionData } from '../../mock/mockData';

const HomeScreen = () => {

    return(
        <>
        <Banner images={BannerData} />
        <ProductList sections={ProductSectionData} />
        </>
    );
};


export default HomeScreen;
