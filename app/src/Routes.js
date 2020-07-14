//define routes here for react-navigation
import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './scenes/FirstScreen';
import SecondScreen from './scenes/SecondScreen';
import ThirdScreen from './scenes/ThirdScreen';
import FourthScreen from './scenes/FourthScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
        <Stack.Screen name="Fourth" component={FourthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
