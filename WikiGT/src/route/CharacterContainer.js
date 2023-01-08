import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CharacterPage from '../screens/home/CharacterPage';
import Character from '../screens/character/Character';

const Stack = createStackNavigator();

const CharacterContainer = () => {

  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator
      >
        <Stack.Screen
          name="CharacterPage"
          component={CharacterPage}
          options={{
            title: 'Characters List',
            headerStyle: {
              backgroundColor: '#1C1814',
            },
            headerTintColor: '#F3E8DC',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Character"
          component={Character}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CharacterContainer;