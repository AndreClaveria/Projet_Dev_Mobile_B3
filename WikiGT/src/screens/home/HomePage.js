import React from "react";
import { Link, NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, ImageBackground, Image, Linking, TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from "styled-components";

import Logo from "../../components/Logo";
import CharacterPage from "./CharacterPage";
import ChapterPage from "./ChapterPage";
import video from "../../video/homebackground.mp4"
import VideoBackground from "../../components/Video";
import OpenLink from "../../utils/openLink";

const ImgBG = styled.ImageBackground`
    object-fit: cover;
`
const HomeText = styled.Text`
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    color: white;
`

const PlayText = styled.Text`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: white;
`

const HomePage = ({navigation}) => {

    return(
        <>
        <VideoBackground video={video}/>
        <HomeText>A Link to Classic Adventure</HomeText>
        <Logo margintop={0} fontsize={50}/>
        <PlayText>This application is for people who plays</PlayText>
        <PlayText>Guardian Tales</PlayText>
        <OpenLink></OpenLink>
        </> 
    )
}

export default HomePage;
