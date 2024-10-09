import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen4_a from './Javascript/Screen4_a'
import Screen4_b from './Javascript/Screen4_b'

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen4_b">
        <Stack.Screen name="Screen4_a" component={Screen4_a} />
        <Stack.Screen name="Screen4_b" component={Screen4_b} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;
