import React, { useState, useEffect } from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";


const WorldBox = ({item}) => {
  console.log(item)
  const imageSource = {
    uri: item,
  }
  const navigation = useNavigation();
  return(
    <Image source={imageSource} style={styles.ImageWorld}/>  
  );
}

const styles = StyleSheet.create({
  ImageWorld: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
})


export default WorldBox;
