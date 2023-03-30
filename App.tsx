import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/common/Header';
import Home from './components/Home';

export default function App() {
  return (
    <ScrollView style={{backgroundColor: '#fefae0'}}>
      <Header />
      <Home />
      <View>
        <Text style={styles.textClass}>Hello World!</Text>
        <Text style={styles.textClass}>Hello World!</Text>
        <Text style={styles.textClass}>Hello World!</Text>
        <Text style={styles.textClass}>Hello World!</Text>
        <Text style={styles.textClass}>Last Text Content</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textClass: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
});