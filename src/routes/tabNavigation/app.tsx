import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SecondScreen from '../../screens/SecondScreen';
import FirstScreen from '../../screens/FirstScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FirstScreen" component={FirstScreen} />
      <Tab.Screen name="SecondScreen" component={SecondScreen} />
    </Tab.Navigator>
  );
}
