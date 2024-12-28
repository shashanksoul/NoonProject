import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../helpers/utils';
import Carousel from 'react-native-reanimated-carousel';
import { CarouselRenderItemInfo } from 'react-native-reanimated-carousel/lib/typescript/types';

type BannerProps =  {
 images: Array<string>,
 interval?: number,
}


const Banner: React.FC<BannerProps> = ({images, interval = 1000}) => {


    const renderItem = ({item}: CarouselRenderItemInfo<string>) => (
        <TouchableOpacity activeOpacity={0.8}>
        <Image resizeMode="cover" source={{uri: item}} style={styles.image} />
        </TouchableOpacity>);

    return (
            <Carousel
            loop
            width={SCREEN_WIDTH}
            height={SCREEN_WIDTH / 2}
            data={images}
            pagingEnabled
            mode="parallax"
			modeConfig={{
				parallaxScrollingScale: 0.9,
				parallaxScrollingOffset: 50,
				}}
            autoPlayInterval={interval}
            renderItem={renderItem}
            autoPlay={true}/>
    );

};

const styles = StyleSheet.create({
    image: {height: 200, width:SCREEN_WIDTH ,borderRadius: 8},
});

export default Banner;
