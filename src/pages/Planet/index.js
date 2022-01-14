import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card, Gap} from '../../components/atoms';

const Planet = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.textheader}>Let's Explore</Text>
        <Text style={styles.descheader}>Everything in Our Galaxy</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={24} />
        <View style={styles.content}>
          <Text style={styles.planettxt}>Most Popular Planets</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
        <View style={styles.items}>
          <Text style={styles.satelitetxt}>Most Popular Satelite</Text>
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </>
  );
};

export default Planet;

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
  textheader: {
    color: '#ffffff',
    fontSize: 24,
  },
  descheader: {color: '#ffffff', fontSize: 16},
  content: {padding: 20},
  items: {
    marginLeft: 20,
  },
  planettxt: {color: '#ffffff', fontSize: 18},
  satelitetxt: {color: '#ffffff', fontSize: 18},
});
