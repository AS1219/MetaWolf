import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomNavigation from './BottomNavigation';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='BottomNavigation' component={BottomNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigation