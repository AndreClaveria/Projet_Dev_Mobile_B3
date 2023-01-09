import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, Image } from "react-native";

import HomePage from "../screens/home/HomePage";
import ChapterContainer from "./ChapterContainer";
import CharacterContainer from "./CharacterContainer";
import { Icon } from "react-native-vector-icons";


const Tab = createBottomTabNavigator();

const NavBar = () => {
  const colorIcon = '#ff0000';
  const sizeIcon = 24;
  return(
      <NavigationContainer independent={true}>
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
          
          backgroundColor: '#1C1814',
          height: 50,
          },
        }} 
        >
          <Tab.Screen 
            name='Characters' 
            component={CharacterContainer}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('../images/utils/characterIcon.png')}
                    
                    style={{
                      resizeMode: 'contain',
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                    />
                  <Text
                  style={{color: '#F3E8DC', fontSize: 14, paddingBottom: 15, fontWeight: 'bold'}}>
                  Characters
                  </Text>
                </View>
              )
            }}
          /> 
          <Tab.Screen
            name='Home' 
            component={HomePage}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('../images/utils/homeIcon.png')}
                    
                    style={{
                      resizeMode: 'contain',
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                    />
                  <Text
                  style={{color: '#F3E8DC', fontSize: 14, paddingBottom: 15, fontWeight: 'bold'}}>
                  Home
                  </Text>
                </View>
              )
            }}
          />
          <Tab.Screen 
            name='Chapter' 
            component={ChapterContainer}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('../images/utils/ChapterIcon.png')}
                    
                    style={{
                      resizeMode: 'contain',
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                    />
                  <Text
                  style={{color: '#F3E8DC', fontSize: 14, paddingBottom: 15, fontWeight: 'bold'}}>
                  Chapters
                  </Text>
                </View>
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default NavBar;