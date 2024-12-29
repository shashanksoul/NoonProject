import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { CartItem, Summary } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { resetCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';

const CartReviewScreen = () => {
    const {products} = useSelector((state: RootState ) => state.cart);
    const {replace} = useNavigation();
    const dispatch = useDispatch();

    const onPlaceOrderClick = () => {
     dispatch(resetCart());
     replace('Confirmation');
    };

    const renderItem  = ({item}) => {
        return <CartItem enableUpdateProduct={false} item={item}/>;
    };

    return(
        <View >
           <FlatList bounces={false} data={products} keyExtractor={(item) => item.id}  renderItem={renderItem} />
            <View style={styles.paymentMethodContainer}>
               <Text style={styles.paymentMethodTitle}>Payment Method</Text>
               <Text>💵 Cash</Text>
            </View>
            <Summary taxCalcultion btnTitle="Place Order" onBtnPress={onPlaceOrderClick}/>
        </View>
    );
};

export default CartReviewScreen;
