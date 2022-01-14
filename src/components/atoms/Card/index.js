import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Gap} from '..';

const Card = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2013/07/12/14/29/saturn-148300_1280.png',
        }}
      />
      <Gap height={18} />
      <Text style={styles.title}>Saturnus</Text>
      <Text style={styles.desc}>The ring planet</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6867F9',
    width: 120,
    height: 160,
    borderRadius: 10,
    marginRight: 20,
    marginTop: 20,
  },
  image: {
    margin: 10,
    marginTop: 20,
    width: 100,
    height: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    color: '#F3F3F3',
  },
});
