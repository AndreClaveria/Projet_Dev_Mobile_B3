import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomePage from './home/WelcomePage';
import NavBar from './NavBarContainer';

const Stack = createStackNavigator();

const Route = () => {
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator
       screenOptions={{
        headerShown: false 
      }} 
      >
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
        />
        <Stack.Screen
          name="NavBar"
          component={NavBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route;