import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TextScreen from '../screens/TextScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Home = createStackNavigator();

const HomeStack = () => (
  <Home.Navigator initialRouteName='Home'>
    <Home.Screen name='Home' component={HomeScreen} />
    <Home.Screen name='Text' component={TextScreen} />
    <Home.Screen name='Settings' component={SettingsScreen} />
  </Home.Navigator>
)
export default HomeStack
