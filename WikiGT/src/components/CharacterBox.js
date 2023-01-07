import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import styled from "styled-components";
import ChapterOne from "../screens/chapter/ChapterOne";

const ScreenMiddle = styled.View`
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
`

const LittleBox = styled.View`
  width: 175px;
  height: 175px;
  background-color: red;
`

const CharacterBox = () => {
  return(
    <>
      <ScreenMiddle>
        <LittleBox>
          <TouchableOpacity onPress={() => navigation.navigate(ChapterOne)}>
            <Image source={require("../images/utils/Knight.png")} style={styles.ImageCharacter}/>
          </TouchableOpacity>
        </LittleBox>
        <LittleBox>
          <TouchableOpacity onPress={() => navigation.navigate(ChapterOne)}>
            <Image source={require("../images/utils/Knight.png")} style={styles.ImageCharacter}/>
          </TouchableOpacity>
        </LittleBox>
      
      </ScreenMiddle>
    </>
  )
}

const styles = StyleSheet.create({
  ImageCharacter: {
  
    width: '100%',
    height: '100%'
  },
})


export default CharacterBox;
