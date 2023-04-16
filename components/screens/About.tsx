import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function About({route}) {
  // console.warn(props.navigation);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [query, setQuery] = useState('');

  const submitForm = () => {
    let formData = {
      name: name,
      mobile: mobile,
      query: query,
    };

    console.warn(JSON.stringify(formData));

    // TODO
    // Make API call to backend server
  };
  return (
    <ScrollView style={{backgroundColor: '#fefae0'}}>
      <View style={styles.container}>
        <Text>About Screen</Text>
        <Text>Name - {route.params.name}</Text>
        <Text>ID - {route.params.id}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    padding: 20,
  },
});
