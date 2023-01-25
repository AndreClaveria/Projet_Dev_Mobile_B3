import React from "react";
import { Linking, Platform, TouchableOpacity } from "react-native";
import styled from "styled-components";

const appleLink = 'https://apps.apple.com/app/guardian-tales/id1485526957';
const androidLink = 'https://play.google.com/store/apps/details?id=com.kakaogames.gdts'

const LinkTo = styled.Image`
    justify-content: center;
    align-items:center;
    margin-left: 33%;
    margin-top: 15%;
`
const redirectTo = () => {
  Linking.openURL(link)
}

const OpenLink = () => {
  if(Platform.OS === 'android'){
    return(
      <>
      <TouchableOpacity onPress={() => redirectTo(androidLink)}>
          <LinkTo source={require("../images/utils/GooglePlay.png")}/>
      </TouchableOpacity>
      </>
    )
  };
  if(Platform.OS === 'ios'){
    return(
      <>
      <TouchableOpacity onPress={() => redirectTo(appleLink)}>
          <LinkTo source={require("../images/utils/AppleStore.png")}/>
      </TouchableOpacity>
      </>
    )
  }
}

export default OpenLink;