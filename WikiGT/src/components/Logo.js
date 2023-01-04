import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Logo = ({margintop, fontsize}) => {
    
    const ImageStyle = styled.Image`
        width: 100%;
        float: left;
        margin-top: ${margintop}px;
        margin-right: 5px;
    `;

    const WikiText = styled.Text`
        font-weight: bold;
        font-size: ${fontsize}px;
        text-align: center;
        color: #D4AC85;
    `

    return (
        <View>
            <ImageStyle
            source={require('../images/utils/logoGT.png')}
            />
            <WikiText>Wiki</WikiText>
        </View>
    )
}

export default Logo;
