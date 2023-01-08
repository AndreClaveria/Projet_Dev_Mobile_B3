import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomePage from "../screens/home/HomePage";
import ChapterContainer from "./ChapterContainer";
import TestAxios from "../screens/home/testAxios";
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

        }} 
        >
          <Tab.Screen 
            name='Character' 
            component={CharacterContainer}
          /> 
          <Tab.Screen
            name='Home' 
            component={HomePage}
          />
          <Tab.Screen 
            name='Chapter' 
            component={ChapterContainer}
          />
          <Tab.Screen
            name='Test'
            component={TestAxios}
          />
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default NavBar;