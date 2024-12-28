import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const ConfirmationScreen = () => {
    const {reset} = useNavigation();


    const onHomeClick = () => {
     reset({index: 0, routes:[{name:'Home'}]});
    };

    return(
        <View style={{flex: 1,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 50}}>✅</Text>
       <Text>Order has been successfully placed</Text>
       <Button title="Return Home" onPress={onHomeClick} />
        </View>
    );
};

export default ConfirmationScreen;
