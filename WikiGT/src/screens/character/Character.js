import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { API_URL } from '../../utils/variableUtils';
import axios from "axios";


const Character = ({route}) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(API_URL + `items/characters/${route.params.id}`)
      .then((res) => {
        console.log(res);
        setCharacter(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
      }, [route.params.id]);
  
  return (
    <View>
      <Text>Informations</Text>
      <Text>{character.History}</Text>
    </View>
  )
}

export default Character;