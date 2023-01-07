import { Link, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, ImageBackground, Image, Linking, TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from "styled-components";
import Logo from "../../components/Logo";
import CharacterPage from "./CharacterPage";
import ChapterPage from "./ChapterPage";
import video from "../../video/homebackground.mp4"
import VideoBackground from "../../components/Video";
import { openLink } from "../../utils/openLink";

const HomePage = ({navigation}) => {

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
    
    const LinkTo = styled.Image`
        justify-content: center;
        align-items:center;
        margin-left: 33%;
        margin-top: 5%;
    `

    return(
        <>
        <VideoBackground video={video}/>
        <HomeText>A Link to Classic Adventure</HomeText>
        <Logo margintop={0} fontsize={50}/>
        <PlayText>This application is for people who plays</PlayText>
        <PlayText>Guardian Tales</PlayText>
        <TouchableOpacity onPress={() => openLink('https://play.google.com/store/apps/details?id=com.kakaogames.gdts')}>
            <LinkTo source={require("../../images/utils/GooglePlay.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://apps.apple.com/app/guardian-tales/id1485526957')}>
            <LinkTo source={require("../../images/utils/AppleStore.png")}/>
        </TouchableOpacity>
        </> 
    )
}

export default HomePage;
