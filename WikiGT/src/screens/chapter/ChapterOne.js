import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, Image, ScrollView, TouchableOpacity, Linking} from "react-native";
import styled from "styled-components";
import ChapterPage from "../home/ChapterPage";


const Box = styled.View`
    width: 100%;
    height: 100%;
    background-color: #1C1814;
`

const BoxTitle = styled.Text`
    color: #F3E8DC;
    font-weight: bold;
    font-size: 32px;
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
const linkToYt = () => {
    Linking.openURL(
      'https://www.youtube.com/watch?v=P0JcEf8Ynok'
    );
};

const ChapterOne = () => {
  const navigation = useNavigation();
    return(
        <ScrollView>
            <Box>
                <BoxTitle>Forest of Kanterbury </BoxTitle>
                <Image source={require('../../images/World1/RoadMapWorld1.png')}/>
                <BoxText>
                    World 1 Forest of Kanterbury is the World where everything begins
                    You will learn how to control your character, and also learn why you are here
                    You will have to catch up the Little Princess, you will meet some character that
                    will help you in your adventure, and maybe obtain a new equipments...
                </BoxText>
                <BoxTitle2>World 1-1</BoxTitle2>
                <Image source={require('../../images/World1/Level1.png')}/>
                <BoxTitle2>Objective to do</BoxTitle2>
                <Image source={require('../../images/World1/objectif1.png')}/>
                <BoxTitle2>Video Tutorial How to 100% World 1-1</BoxTitle2>
                <TouchableOpacity onPress={linkToYt}>
                    <Image source={require('../../images/World1/100World11.png')}/>
                </TouchableOpacity>
                <BoxTitle2>World 1-2</BoxTitle2>
                <Image source={require('../../images/World1/Level1.png')}/>
                <BoxTitle2>Objective to do</BoxTitle2>
                <Image source={require('../../images/World1/objectif1.png')}/>
                <BoxTitle2>Video Tutorial How to 100% World 1-1</BoxTitle2>
                <TouchableOpacity onPress={linkToYt}>
                    <Image source={require('../../images/World1/100World11.png')}/>
                </TouchableOpacity>
              
            </Box>
        </ScrollView>
    )
}

export default ChapterOne;
