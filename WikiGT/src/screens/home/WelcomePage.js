import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../components/Logo";
import NavBar from "../NavBarContainer";
import VideoBackground from "../../components/Video";
import video from "../../video/background.mp4"


const WelcomePage = () => {

    const navigation = useNavigation();

    return(
        <>
        <VideoBackground video={video}/>
            <View>
                <Logo margintop={150} fontsize={80}/>
                <Button
                    title="Enter"
                    onPress={() =>
                        navigation.navigate('NavBar')
                    }
                />           
            </View>
        </>
    )
}

export default WelcomePage;


