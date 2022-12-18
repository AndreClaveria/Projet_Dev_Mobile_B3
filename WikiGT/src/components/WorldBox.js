import React from "react";
import { Text, View, ImageBackground,ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

const Box2 = styled.View`
  width: 95%;
  height: 150px;
  margin-left: 10px;
  align-items: center;
  border-radius: 10px;

`
const ImgBG = styled.ImageBackground`
  background-size: cover;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  
`

const ChapterImage = styled.Image`
  justify-content: center;
  align-items:center;
  margin-left: 30%;

`  

const WhiteBox = styled.View`
    width: 100%;
    height: 50px;
`

const WorldBox = () => {
  const navigation = useNavigation();
  return(
    <>
      <ScrollView>
      <Box2>
        <TouchableOpacity onPress={() => navigation.navigate('Tutorial')}>
          <ChapterImage source={require('../images/World1/Tutorial.jpg')}/>
        </TouchableOpacity>
      </Box2>
      <WhiteBox/>
      <Box2>
        <TouchableOpacity onPress={() => navigation.navigate('WorldOne')}>
          <ChapterImage source={require('../images/World1/World1.jpg')}/>
        </TouchableOpacity>
      </Box2>
      <WhiteBox/>
      <Box2>
      <TouchableOpacity onPress={() => navigation.navigate('WorldTwo')}>
        <ChapterImage source={require('../images/World2/World2.jpg')}/>
      </TouchableOpacity>
      </Box2>
      <WhiteBox/>
      <Box2>
      <TouchableOpacity onPress={() => navigation.navigate('WorldThree')}>
        <ChapterImage source={require('../images/World3/World3.jpg')}/>
      </TouchableOpacity>
      </Box2>
      <WhiteBox/>
      </ScrollView>
    </>
  )
  
}

export default WorldBox;