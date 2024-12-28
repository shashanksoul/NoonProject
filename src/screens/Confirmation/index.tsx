import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const ConfirmationScreen = () => {
    const {reset} = useNavigation();


    const onHomeClick = () => {
     reset({index: 0, routes:[{name:'Home'}]});
    };

    return(
        <View style={styles.container}>
        <Text style={styles.icon}>✅</Text>
        <Text>Order has been successfully placed</Text>
        <Button title="Return Home" onPress={onHomeClick} />
        </View>
    );
};

export default ConfirmationScreen;
