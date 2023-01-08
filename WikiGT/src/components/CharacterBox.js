import React, { useState, useEffect } from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import Character from "../screens/character/Character";

const ScreenMiddle = styled.View`
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
`

const LittleBox = styled.View`
  width: 175px;
  height: 175px;
  background-color: red;
  border-width: 1px;
  border-radius: 5px;
  border-color: #ddd;
  border-bottom-width: 0;
`

const CharacterBox = () => {

  const navigation = useNavigation();

  return(
    
    <ScreenMiddle>
      <LittleBox>
        <TouchableOpacity onPress={() => navigation.navigate(Character)}>
          <Image source={require("../images/utils/Knight.png")} style={styles.ImageCharacter}/>
        </TouchableOpacity>
      </LittleBox>
      <LittleBox>
        <TouchableOpacity onPress={() => navigation.navigate(Character)}>
            <Image source={require("../images/utils/Knight.png")} style={styles.ImageCharacter}/>
          </TouchableOpacity>
      </LittleBox>  
    </ScreenMiddle>
    
  );

}

const styles = StyleSheet.create({
  ImageCharacter: {
  
    width: '100%',
    height: '100%'
  },
})


export default CharacterBox;
