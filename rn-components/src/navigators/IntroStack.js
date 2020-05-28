import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen';
import HomeStack from './HomeStack';
const FirstStack = createStackNavigator();
const IntroStack = () => (
  <FirstStack.Navigator initialRouteName='Intro' headerMode='none'>
    <FirstStack.Screen name='Intro' component={IntroScreen} />
    <FirstStack.Screen name='Home' component={HomeStack} />
  </FirstStack.Navigator>
)
export default IntroStack
