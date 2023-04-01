import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <>
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

      <View style={styles.box}>
        <View style={styles.item}>
          <Image
            source={require('../images/image.jpg')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={[styles.item, {flex: 3, paddingLeft: 8}]}>
          <Text
            style={[styles.boxItemText, {fontSize: 25, fontWeight: 'bold'}]}>
            Neeraj Avinash
          </Text>
          <Text style={styles.boxItemText}>Fullstack Developer</Text>
          <Text style={styles.boxItemText}>Web and Mobile Developer</Text>
        </View>
      </View>
    </>
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
  heading: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 3,
  },

  box: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#606c38',
    margin: 5,
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
  },
  boxItemText: {
    color: 'black',
    fontSize: 18,
    marginBottom: 3,
  },
});
