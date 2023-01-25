import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import CharacterBox from "../../components/CharacterBox";
import { API_URL } from "../../utils/variableUtils";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const BackgroundC = styled.View`
  
    background-color: black;
`

const ScreenMiddle = styled.View`
    flex-direction: row;
    padding: 10px;
`

const LittleBox = styled.View`
    width: 175px;
    height: 175px;
    background-color: #1C1814;
    border-width: 1px;
    border-radius: 5px;
    border-color: #ddd;
    border-bottom-width: 0;
`

const Box = styled.View`
    align-items: center;
    justify-content: center;
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
    font-size: 18px;
`

const CharacterPage = () => {

    const [characters, setCharacters] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        axios
          .get(API_URL + "items/characters")
          .then((res) => {
            console.log(res);
            setCharacters(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          })
    }, []);

    const renderItem = ({item}) => {
        return (
            <BackgroundC>
            <ScreenMiddle>
                <LittleBox>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Character', {id: item.id})
                    }}>
                        <CharacterBox item={`https://iz3m97od.directus.app/assets/${item.ImageMini}`}></CharacterBox>
                    </TouchableOpacity>
                </LittleBox>
                <Box>
                    <TextName>{item.Name}</TextName>
                </Box>
            </ScreenMiddle>
            </BackgroundC>
        )
    }

    return(
        <View>
            <FlatList
                data={characters}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CharacterPage;
