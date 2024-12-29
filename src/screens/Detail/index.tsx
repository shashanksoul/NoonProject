import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView,Text,TouchableOpacity,View  } from 'react-native';
import styles from './styles';
import SellingFast from '../../components/SellingFast';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';

const DetailScreen: React.FC = () => {

    const {products} = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const {navigate} = useNavigation();

    const {params} = useRoute();
    const {setOptions} = useNavigation();

    const productDetail = params?.item;
    const isAlreadyInCart = React.useMemo(() => products?.some(item => item.id === productDetail.id),[products, productDetail]);
    console.log(products, isAlreadyInCart);

    React.useEffect(() => {
     setOptions({
        title: productDetail?.name,
     });
    },[setOptions, productDetail]);

    const addToCartClick = () => {
    dispatch(addToCart(productDetail));
    };

    const removeFromCartClick = () => {
    dispatch(removeFromCart(productDetail));
    };

    const onCartClick = React.useCallback(() => {
        navigate('Cart');
    },[navigate]);

     const ViewCartBtn = React.useCallback(() => (<TouchableOpacity onPress={onCartClick} style={styles.cartBtn}>
        <Text>{` View Cart 🛒 ${products.length}`}</Text>
        </TouchableOpacity>),[products.length, onCartClick]);

    return(
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
            <View style={styles.container}>
               <View>
               <Image style={styles.thumbnail} source={{uri: productDetail.thumbnail}} />
               <SellingFast />
               </View>
               <Text>{productDetail.description}</Text>
               <View style={styles.priceContainer}>
                <Text style={styles.ogPrice}>{`${productDetail.originalPrice} ₹`}</Text>
                <Text style={styles.sellingPrice}>{`${productDetail.price} ₹`}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.6} style={styles.addCartBtn} onPress={isAlreadyInCart ? removeFromCartClick : addToCartClick}>
                <Text>{isAlreadyInCart ? 'Remove from Cart' : 'Add to cart'}</Text>
                </TouchableOpacity>
            </View>
            {products?.length > 0 && <ViewCartBtn />}
        </ScrollView>
    );
};

export default DetailScreen;
