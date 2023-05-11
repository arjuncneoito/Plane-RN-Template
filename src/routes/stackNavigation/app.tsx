import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../tabNavigation/app';

const AppScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'App'}>
      <Stack.Screen
        name="App"
        component={App}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AppScreens;
