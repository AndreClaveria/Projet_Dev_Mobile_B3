// Libraries react
import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
// Components
import Logo from "../../components/Logo";
import NavBar from "../../route/NavBarContainer";
import VideoBackground from "../../components/Video";
import video from "../../video/background.mp4"

const EnterButton = styled.TouchableOpacity`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 105%;
    left: 50%;
    margin-left: -50px;
    margin-top: -25px;
    background-color: gold;
`

const EnterText = styled.Text`
    font-weight: bold;
    font-size: 18px;
`
const WelcomePage = () => {

    const navigation = useNavigation();

    return(
        <>
        <VideoBackground video={video}/>
            <View>
                <Logo margintop={150} fontsize={80}/>
                <EnterButton onPress={() => navigation.navigate('NavBar')}>
                    <EnterText>Enter</EnterText>
                </EnterButton>
                     
            </View>
        </>
    )
}

export default WelcomePage;


