import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChapterPage from '../screens/home/ChapterPage';
import ChapterOne from '../screens/chapter/ChapterOne';
import ChapterTwo from '../screens/chapter/ChapterTwo';
import ChapterThree from '../screens/chapter/ChapterThree';
import Tutorial from '../screens/chapter/Explaination';

const Stack = createStackNavigator();


const ChapterContainer = () => {
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Chapters"
          component={ChapterPage}
          options={{
            title: 'Chapters List',
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
          name="Tutorial"
          component={Tutorial}
          options={{
            title: 'Explanation',
            headerStyle: {
              backgroundColor: '#1C1814',
            },
            headerTintColor: '#F3E8DC',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
  
          }}
        />
        <Stack.Screen
          name="ChapterOne"
          component={ChapterOne}
          options={{
            title: 'World 1',
            headerStyle: {
              backgroundColor: '#1C1814',
            },
            headerTintColor: '#F3E8DC',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
  
          }}
        />
        <Stack.Screen
          name="ChapterTwo"
          component={ChapterTwo}
        />
        <Stack.Screen
          name="ChapterThree"
          component={ChapterThree}
        />
        

      </Stack.Navigator>
     
    </NavigationContainer>
   
  )
}

export default ChapterContainer;