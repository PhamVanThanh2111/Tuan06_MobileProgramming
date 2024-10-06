import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen4_a from './Javascript/Screen4_a'

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen4_a">
        <Stack.Screen name="Screen4_a" component={Screen4_a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;
