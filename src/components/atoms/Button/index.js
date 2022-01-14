import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F87619',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text:{
      fontSize:18,
      fontFamily: 'poppin',
      textAlign: 'center',
      color: '#ffffff'
  }
});
