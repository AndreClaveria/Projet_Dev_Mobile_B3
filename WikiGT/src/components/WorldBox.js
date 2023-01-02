import React from "react";
import { Text, View, ImageBackground,ScrollView, Image, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

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


const WorldBox = ({picture, name}) => {

  const navigation = useNavigation();

  return(
    <>   
      <Box2>
        <TouchableOpacity onPress={() => navigation.navigate(name)}>
          <Image source={picture} style={styles.ImageWorld}/>
        </TouchableOpacity>
        <WhiteBox></WhiteBox>
      </Box2>
    </>
  )
}

const styles = StyleSheet.create({
  ImageWorld: {
    resizeMode: "contain", 
    aspectRatio: 2.1,
  },
})

export default WorldBox;