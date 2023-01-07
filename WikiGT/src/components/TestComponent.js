import React from "react";
import { Text, View, ImageBackground,ScrollView, Image, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import axios from "axios";

const Box2 = styled.View`
  width: 100%;
  height: 125px;
  align-items: center;
  border-radius: 10px;

`
const ChapterImage = styled.Image`

  object-fit: contain;
  aspect-ratio: 2.1;

`  

const WhiteBox = styled.View`
    width: 100%;
    height: 10px;
`

const WorldRow = ({ monde, picture, lien}) => {
  
  return(
    
      <Box2>
        <Text>{monde}</Text>
      
          <Image source={"https://iz3m97od.directus.app/assets/" + picture} style={styles.ImageWorld}/>
       
        <WhiteBox></WhiteBox>
      </Box2>
    
  )
}

const styles = StyleSheet.create({
  ImageWorld: {
    backgroundColor: 'red'
  },
})

export default WorldRow;