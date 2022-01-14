import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILSplash} from './assets';
import { GetStarted } from './pages';
import {Planet} from './pages'

export default function App() {
  return (
    <View>
      {/* <GetStarted /> */}
      <Planet />
    </View>
  );
}

const styles = StyleSheet.create({});
