import React from "react";
import { View, Text, Button} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import CharacterBox from "../../components/CharacterBox";

const BackgroundC = styled.View`
  
    background-color: black;
`
const CharacterPage = () => {
    return(
        <ScrollView>
            <BackgroundC>
            <CharacterBox></CharacterBox>
            <CharacterBox></CharacterBox>
            <CharacterBox></CharacterBox>
            <CharacterBox></CharacterBox>
            </BackgroundC>
        </ScrollView>
    )
}

export default CharacterPage;
