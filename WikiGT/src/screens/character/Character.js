import React, { useEffect, useState } from "react";
import { View, Text, Image} from "react-native";
import { API_URL } from '../../utils/variableUtils';
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import CharacterBox from "../../components/CharacterBox";

const BackgroundC = styled.View`
    width: 100%;
    height: 100%;
    background-color: #1C1814;
    border-width: 7.5px;
    border-color: #DBAEA9;
    
`

const ScreenMiddle = styled.View`
    flex-direction: row;
    padding: 10px;
`

const LittleBox = styled.View`
    width: 175px;
    height: 300px;
    background-color: #1C1814;
    border-width: 5px;
    border-radius: 5px;
    border-color: #F3E8DC;
`

const HistoryView = styled.View`
    width: 100%;
    height: 100%;
    background-color: #1C1814;
    padding-left: 10px;
`

const Box = styled.View`
    padding-left: 10px;
`
const TextName = styled.Text`
    color: #F3E8DC;
    font-weight: bold;
    font-size: 26px;
`
const TextTitle = styled.Text`
    color: #F3E8DC;
    font-weight: bold;
    font-size: 14px;
`

const Character = ({route}) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(API_URL + `items/characters/${route.params.id}`)
      .then((res) => {
        console.log(res);
        setCharacter(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
      }, [route.params.id]);
  
  return (
    <BackgroundC>
      <ScrollView>
        <View>
            <ScreenMiddle>
              <LittleBox>
                <CharacterBox item={`https://iz3m97od.directus.app/assets/${character.ImageFull}`}/>
              </LittleBox>
              <Box>
                <TextName>{character.Name}</TextName>
                <TextTitle>Title : {character.Title}</TextTitle>
                <TextTitle> Age : { character.Age ? character.Age : '?'} ans </TextTitle>
                <TextTitle>Taille : {character.Height ? character.Height : '?'} cm</TextTitle>
                <TextTitle>Poids : {character.Weight ? character.Weight : '?'} kg</TextTitle>
                <TextTitle>Role : {character.Role ? character.Role : '?'}</TextTitle>
                <TextTitle>Espèce : {character.Species ? character.Species : '?'}</TextTitle>
                <TextTitle>Element : {character.Element ? character.Element : '?'}</TextTitle>
                <TextTitle>Armes : {character.Equipement ? character.Equipement : '?'}</TextTitle>
                <TextTitle> Voix : { character.VoiceActor ? character.VoiceActor : 'Pas de doubleur.se'} </TextTitle>
              </Box>
            </ScreenMiddle>
          <HistoryView>
            <TextName>Informations : </TextName>
            <TextTitle>{character.History}</TextTitle>
          </HistoryView>
        
        </View>
      </ScrollView>
    </BackgroundC>
  )
}

export default Character;