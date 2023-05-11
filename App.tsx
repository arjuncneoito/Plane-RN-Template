// import {View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppScreens from './src/routes/stackNavigation/app';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppScreens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
