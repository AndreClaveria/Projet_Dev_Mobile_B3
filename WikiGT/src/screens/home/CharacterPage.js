import React from "react";
import { View, Text, Button} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import CharacterBox from "../../components/CharacterBox";

const CharacterPage = () => {
    return(
        <ScrollView>
            <CharacterBox></CharacterBox>
            <CharacterBox></CharacterBox>
        </ScrollView>
    )
}

export default CharacterPage;
