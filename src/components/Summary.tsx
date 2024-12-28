import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

type SummaryProps = {
 btnTitle: string;
 onBtnPress: () => void;
 taxCalcultion?: boolean
}

const Summary: React.FC<SummaryProps> = ({btnTitle, onBtnPress, taxCalcultion = false}) => {

    const {products} = useSelector((state) => state.cart);

    const itemsAmount = React.useMemo(() => products.reduce((acc, current) => {
            const productPrice = current.originalPrice * current.qty;
            return productPrice + acc;
        },0),[products]);

        const totalAmount = React.useMemo(() => products.reduce((acc, current) => {
            const productPrice = current.price * current.qty;
            return productPrice + acc;
        },0),[products]);

       const gstTax = React.useMemo(() => taxCalcultion ? ( totalAmount * 0.18) : 0,[totalAmount, taxCalcultion]);
       const amountAfterTax = React.useMemo(() => (totalAmount + gstTax).toFixed(2), [totalAmount, gstTax]);


return(<View style={styles.summaryContainer}>
    <View
    style={styles.priceContainer}>
    <Text>{'Items: '}</Text>
    <Text>{itemsAmount} ₹</Text>
    </View>
    <View style={styles.priceContainer}>
    <Text >{'Discounts: '}</Text>
    <Text>-{itemsAmount - totalAmount} ₹</Text>
    </View>
    {taxCalcultion && <View style={styles.priceContainer}>
    <Text>{'GST(18%): '}</Text>
    <Text>{gstTax.toFixed(2)} ₹</Text>
    </View>}
    <View style={styles.priceContainer}>
    <Text>{'Order Total: '}</Text>
    <Text>{amountAfterTax} ₹</Text>
    </View>
    <TouchableOpacity onPress={onBtnPress} style={styles.bottomBtn}>
     <Text>{btnTitle}</Text>
    </TouchableOpacity>
    </View>);

};

const styles = StyleSheet.create({
    summaryContainer: { padding: 10},
    priceContainer: {flexDirection:'row', justifyContent:'space-between'},
    bottomBtn: {backgroundColor:'orange', padding: 10, borderRadius: 8, alignItems:'center', marginTop: 10},
});

export default Summary;
