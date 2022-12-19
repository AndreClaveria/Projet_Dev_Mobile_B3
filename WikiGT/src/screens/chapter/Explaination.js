import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, ScrollView, Image, StyleSheet, TouchableOpacity} from "react-native";
import styled from "styled-components";
import WorldBox from "../../components/WorldBox";
import worldOne from '../../images/World1/World1.jpg';
import ChapterOne from "./ChapterOne";

const Box = styled.View`
    width: 100%;
    height: 100%;
    background-color: #1C1814;
`

const BoxTitle = styled.Text`
    color: #F3E8DC;
    font-weight: bold;
    font-size: 30px;
`

const Box2 = styled.View`
  width: 95%;
  height: 150px;
  margin-left: 10px;
  align-items: center;
  border-radius: 10px;

`

const ChapterImage = styled.Image`
  justify-content: center;
  align-items:center;
  margin-left: 30%;

`  

const BoxTitle2 = styled.Text`
    color: #F3E8DC;
    font-weight: bold;
    font-size: 24px;
`

const BoxText = styled.Text`
    color: #F3E8DC;
    font-weight: bold;
`

const Tutorial = () => {
  const navigation = useNavigation();
    return(
      
        <Box>
          <ScrollView>
            <BoxTitle>What's Guardian Tales Wiki? </BoxTitle>
            <BoxText>
              First, Guardian Tales is a video game.
              It's a Action-RPG type game with a bit of Gacha.
              The purpose of this application is too help out the people by giving
              them all the solution of every worlds:
            </BoxText>
            <BoxText>
              But first of all : I will explain all the things that a single world
              contains.
            </BoxText>
            <BoxTitle2>Here the map of World 1 : </BoxTitle2>
            <Image source={require('../../images/World1/MapWorld1.png')}/>
            <BoxText>The map is compose of Main Stage and Sub Stage</BoxText>

            <BoxTitle2>Here the map of Road map : </BoxTitle2>
            <Image source={require('../../images/World1/RoadMapWorld1.png')}/>

            <BoxText> As you see Main Stage are represented with 3 star and sub stage with 1 star</BoxText>
            <BoxText>
              Main stage have 3 stars because you to collected 2 things and finishing the stage
            </BoxText>
            <Image source={require('../../images/utils/Exemple.png')}/>
            <BoxText>
              You have to collect Star Piece and Purple Coin. And Chest are optional.
              Each Main Stage have a certains number of Purple Coin and Star Piece
            </BoxText>
            <Image source={require('../../images/utils/GuardianTales.gif')}/>
            <BoxTitle>Good Luck!!</BoxTitle>
            <Box2>
              <WorldBox picture={worldOne} name={ChapterOne}/>
            </Box2>
          </ScrollView>
        </Box>
        
    )
}


export default Tutorial;
