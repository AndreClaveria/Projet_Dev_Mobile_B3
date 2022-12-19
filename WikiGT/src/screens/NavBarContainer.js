import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CharacterPage from "./home/CharacterPage";
import HomePage from "./home/HomePage";
import ChapterContainer from "./ChapterContainer";

const Tab = createBottomTabNavigator();

const NavBar = () => {
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
            component={CharacterPage}
          />
          <Tab.Screen
            name='Home' 
            component={HomePage}
          />
          <Tab.Screen 
            name='Chapter' 
            component={ChapterContainer}
          />
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default NavBar;