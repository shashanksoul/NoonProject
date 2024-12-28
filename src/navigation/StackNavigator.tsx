import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartReviewScreen, CartScreen, ConfirmationScreen, DetailScreen, HomeScreen, SearchScreen } from '../screens';
import { HederRight } from '../components';

export type RootStackParamList = {
    Home: undefined;
    Detail: { item: any };
    Cart: undefined;
    CartReview: undefined;
    Confirmation: undefined;
    Search: undefined;
  };


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} options={{headerRight: HederRight }} />
<Stack.Screen name="Detail" component={DetailScreen} />
<Stack.Screen name="Cart" component={CartScreen} />
<Stack.Screen name="CartReview" options={{headerTitle: 'Cart Review'}} component={CartReviewScreen} />
<Stack.Screen  name="Confirmation" component={ConfirmationScreen} />
<Stack.Screen  name="Search" component={SearchScreen} />
</Stack.Navigator>);

export default RootStack;
