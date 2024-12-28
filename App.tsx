import React from 'react';
import AppNavigator from './src/navigation';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {


  return(
    <Provider store={store}>
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <GestureHandlerRootView>
    <AppNavigator/>
    </GestureHandlerRootView>
    </SafeAreaProvider>
    </Provider>
  );
};

export default App;
