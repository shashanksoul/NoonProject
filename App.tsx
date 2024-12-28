import React from 'react';
import AppNavigator from './src/navigation';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {


  return(
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <GestureHandlerRootView>
    <AppNavigator/>
    </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
