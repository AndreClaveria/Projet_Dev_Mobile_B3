import React from "react";
import {View, Text, Button} from "react-native";
import styled from "styled-components";
import WorldBox from "../../components/WorldBox";

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
        <Box>
            <WorldBox/>
        </Box>
        </> 
    )
}

export default ChapterPage;
