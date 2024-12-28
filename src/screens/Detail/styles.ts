import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollContentContainer: {flex:1},
    container: {
        padding: 10,
    },
    thumbnail: {height: 300, width:'100%', borderRadius:8},
    description: {fontSize: 12, color:'black'},
    priceContainer: {flexDirection:'row', alignItems:'center'},
    ogPrice: {color:'grey', textDecorationLine:'line-through', fontSize: 18},
    sellingPrice: {fontSize: 22},
    addCartBtn: {borderRadius: 8, padding:8, backgroundColor:'orange', justifyContent:'center', alignItems:'center', marginVertical: 8},
    cartBtn: {position:'absolute', bottom: 0, paddingVertical: 10,justifyContent:'center',alignItems:'center', width:'100%', backgroundColor:'orange'},
});

export default styles;
