import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const BackgroundHome = () => {
    
    const ImageStyle = styled.Image`
      height: auto
      max-width: 100%;
    
    `;

    return (
        <View>
            <ImageStyle
            source={require('../images/Background/BackgroundHome.png')}
            />
        </View>
    )
}

export default BackgroundHome;
