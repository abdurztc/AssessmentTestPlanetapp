import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetstarted} from '../../assets';
import { Button, Gap } from '../../components/atoms';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetstarted} style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.title}>Explore Our Galaxy</Text>
        <Text style={styles.title}>Want to know and explore all thing about the planets in the Galaxy</Text>
        <Gap height={24} />
        <Button title="Get Started"/>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',

  },
  card: {
      backgroundColor: '#F1F7F0',
      marginTop:420,
      marginHorizontal:40,
      paddingVertical: 20,
      paddingHorizontal:20,
    borderRadius:20
  },
  title:{
      color: '#112340',
      fontFamily: 'Poppin',
      textAlign: 'center',
      fontSize: 16
  }
});
