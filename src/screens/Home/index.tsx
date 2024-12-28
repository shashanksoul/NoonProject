import React from 'react';
import { Banner, ProductList } from '../../components';
import { BannerData, ProductSectionData } from '../../mock/mockData';

const HomeScreen = () => {

    return(
        <>
        <Banner interval={2000}  images={BannerData} />
        <ProductList sections={ProductSectionData} />
        </>
    );
};


export default HomeScreen;
