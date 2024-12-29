import React from 'react';
import { View, Text, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addProductQty, removeFromCart, removeProductQty } from '../../redux/cartSlice';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { CartItem, Summary } from '../../components';
import { RootState } from '../../redux/store';


const CartScreen : React.FC = () => {

    const {products} = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const {navigate, reset} = useNavigation();

    const addProductCountClick = (product) => {
      dispatch(addProductQty(product));
    };

    const removeProductCountClick = (product) => {
        if(product.qty > 1){
            dispatch(removeProductQty(product));
        }else{
            dispatch(removeFromCart(product));
        }
      };

      const onGoHomeClick = () => {
        reset({index: 0, routes:[{name:'Home'}]});
      };

      const onCheckOutClick = () => {
          navigate('CartReview');
      };


    const renderItem  = ({item}) => {
        return <CartItem enableUpdateProduct onRemovePress={() => removeProductCountClick(item)}  onAddPress={() => addProductCountClick(item)} item={item}/>;
    };


    const renderFooterItem  = () => (<Summary btnTitle="Checkout" onBtnPress={onCheckOutClick} />);

    if(products.length < 1){
        return(
            <View style={styles.noProduct}>
                <Text>Empty Cart.</Text>
                <Button title="Go Home" onPress={onGoHomeClick} />
            </View>
        );
    }
    return(
        <View>
         <FlatList bounces={false} data={products} keyExtractor={(item) => item.id}  renderItem={renderItem}  ListFooterComponent={renderFooterItem}  />
        </View>
    );
};

export default CartScreen;
