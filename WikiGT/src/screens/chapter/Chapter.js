import React, { useEffect, useState } from "react";
import { View, Text, Image} from "react-native";
import { API_URL } from '../../utils/variableUtils';
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import CharacterBox from "../../components/CharacterBox";
import WorldBox from "../../components/WorldBox";

const BackgroundC = styled.View`
    width: 100%;
    height: 100%;
    background-color: #1C1814;
    border-width: 7.5px;
    border-color: #DBAEA9; 
`

const ScreenMiddle = styled.View`
    padding: 10px;
`

const LittleBox = styled.View`
    width: 100%;
    height: 300px;
    background-color: #DE9859;
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
    font-size: 20px;
`

const TextLittle = styled.Text`
    color: #F3E8DC;
    font-weight: bold;
    font-size: 14px;
`

const Chapter = ({route}) => {
  const [chapter, setChapter] = useState({});

  useEffect(() => {
    axios
      .get(API_URL + `items/world/${route.params.id}`)
      .then((res) => {
        console.log(res);
        setChapter(res.data.data);
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
            <TextTitle>Carte du {chapter.monde} : {chapter.titre} </TextTitle>
            <Text/>
            <LittleBox>
              <WorldBox item={`https://iz3m97od.directus.app/assets/${chapter.Map}`}/>
            </LittleBox>
          </ScreenMiddle>
          <Box>
            <TextName>Contexte : </TextName>
            <TextLittle>{chapter.Context ? chapter.Context : 'Pas de données'}</TextLittle>
            <Text/>
            <TextTitle>Objet a collecté</TextTitle>
            <Text/>
            <TextLittle> Pièce Etoile : {chapter.StarPieces ? chapter.StarPieces : 'Pas de données'} </TextLittle>
            <TextLittle> Pièce violette : {chapter.PurpleCoin ? chapter.PurpleCoin : 'Pas de données'} </TextLittle>
            <Text/>
            <TextTitle>Les niveaux : </TextTitle>
            <Text/>
            <TextLittle>{chapter.Stages ? chapter.Stages : 'Pas de données' }</TextLittle>
            <Text/>
            <TextTitle>Quêtes : </TextTitle>
            <Text/>
            <TextLittle>{chapter.Quests ? chapter.Quests : 'Pas de données' }</TextLittle>
            <Text/>
            <TextTitle>Niveaux Secret</TextTitle>
            <Text/>
            <TextLittle>{chapter.SecretStages ? chapter.SecretStages : 'Pas de données' }</TextLittle>
            <Text/>
          </Box>
        </View>
      </ScrollView>
    </BackgroundC>
  )
}

export default Chapter;