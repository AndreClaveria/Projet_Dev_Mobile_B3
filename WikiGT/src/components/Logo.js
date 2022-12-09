import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const ImageStyle = styled.Image`
  width: 100%;
  float: left;
  margin-right: 10px;
`;

const Logo = () => {
    return (
        <View>
            <ImageStyle
            source={require('../images/logoGT.png')}
            />
        </View>
    )
}

export default Logo;
