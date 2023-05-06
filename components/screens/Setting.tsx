import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Setting() {
  return (
    <ScrollView style={{backgroundColor: '#fefae0'}}>
      <View style={styles.container}>
        <Text>Setting</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
