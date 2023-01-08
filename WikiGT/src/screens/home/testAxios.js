import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import WorldRow from '../../components/TestComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { API_URL } from '../../utils/variableUtils';

const TestAxios = () => {
  const [worlds, setWorlds] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "items/world")
      .then((res) => {
        console.log(res);
        setWorlds(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // on gere les erreur
      });
  }, []);

  // if (loading) {
  //   return (
  //     <View>
  //       <ActivityIndicator />
  //     </View>
  //   );
  // }

  return (
    <ScrollView>
      <View>
        <Text>Test</Text>
        
      </View>
      {worlds.map((world) => {
        return (
          <View>
              <Text>https://iz3m97od.directus.app/assets/{world.image}</Text>
              <Image source={`https://iz3m97od.directus.app/assets/` + world.image} style={styles.ImageWorld}></Image>
          </View>
         
        );
      })}
    </ScrollView>
  
  );
  };

  const styles = StyleSheet.create({
    ImageWorld: {
      width: '100%',
      height: '50%',     
      backgroundColor: 'red'
    },
  })


export default TestAxios;