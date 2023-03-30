import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.one]}>
        <Text style={styles.textClass}>Home</Text>
      </View>
      <View style={[styles.card, styles.two]}>
        <Text style={styles.textClass}>About Us</Text>
      </View>
      <View style={[styles.card, styles.three]}>
        <Text style={styles.textClass}>Contact Us</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    padding: 5,
  },
  card: {
    flex: 1,
    padding: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  one: {
    backgroundColor: 'red',
  },
  two: {
    backgroundColor: 'blue',
  },
  three: {
    backgroundColor: 'yellow',
  },
  textClass: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
