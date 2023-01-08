import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import { API_URL } from "../../utils/variableUtils";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import WorldBox from '../../components/WorldBox';

const BackgroundC = styled.View`
    background-color: black;
`

const ScreenMiddle = styled.View`
    flex-direction: row;
    padding: 10px;
`

const LittleBox = styled.View`
    width: 100%;
    height: 95px;
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

const ChapterPage = () => {

    const [chapters, setChapters] = useState([])
    const navigation = useNavigation();
    useEffect(() => {
        axios
          .get(API_URL + "items/world")
          .then((res) => {
            console.log(res);
            setChapters(res.data.data);
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
                        navigation.navigate('Chapter', {id: item.id})
                    }}>
                        <WorldBox item={`https://iz3m97od.directus.app/assets/${item.image}`}></WorldBox>
                    </TouchableOpacity>
                </LittleBox>
            </ScreenMiddle>
            </BackgroundC>
        )
    }
    return(
        <View>
        <FlatList
            data={chapters}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </View> 
    )
}

export default ChapterPage;
