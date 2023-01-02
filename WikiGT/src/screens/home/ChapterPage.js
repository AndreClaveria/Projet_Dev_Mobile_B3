import React from "react";
import {View, Text, Button, ScrollView} from "react-native";
import styled from "styled-components";
import WorldBox from "../../components/WorldBox";
import tuto from '../../images/World1/Tutorial.jpg';
import worldOne from '../../images/World1/World1.jpg';
import worldTwo from '../../images/World2/World2.jpg';
import worldThree from '../../images/World3/World3.jpg';
import worldFour from '../../images/World4/World4.jpg';
import Tutorial from "../chapter/Explaination";
import ChapterOne from "../chapter/ChapterOne";
import ChapterTwo from "../chapter/ChapterTwo";
import ChapterThree from "../chapter/ChapterThree";

const Box = styled.View`
    
    width: 100%;
    height: 100%;
    background-color: black;

`

const TextWorld = styled.Text`
    font-size: 25px;
    text-align: center;
    color: white;
    margin-top: 5px;
`

const ChapterPage = () => {
    return(
        <>
        <ScrollView>
            <Box>
                <WorldBox picture={tuto} name={Tutorial}/>
                <WorldBox picture={worldOne} name={ChapterOne}/>
                <WorldBox picture={worldTwo} name={ChapterTwo}/>
                <WorldBox picture={worldThree} name={ChapterThree}/>
                <WorldBox picture={worldFour} name={ChapterThree}/>
                <WorldBox picture={worldFour} name={ChapterThree}/>
            </Box>
        </ScrollView>
        </> 
    )
}

export default ChapterPage;
