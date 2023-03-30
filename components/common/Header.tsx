import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My React Native Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingBottom: 8,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
  },
});
