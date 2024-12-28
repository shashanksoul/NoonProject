import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './StackNavigator';

const AppNavigator = () => {

    return(
        <NavigationContainer>
        <RootStack />
        </NavigationContainer>
    );
};

export default AppNavigator;
