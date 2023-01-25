import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chapter from '../screens/chapter/Chapter';
import ChapterPage from '../screens/home/ChapterPage';

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
          name="Chapter"
          component={Chapter}
          options={{
            title: 'Chapter',
            headerStyle: {
              backgroundColor: '#1C1814',
            },
            headerTintColor: '#F3E8DC',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
         
          }}
        />
        
        

      </Stack.Navigator>
     
    </NavigationContainer>
   
  )
}

export default ChapterContainer;