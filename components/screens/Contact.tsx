import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextComponent,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

export default function Contact() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [query, setQuery] = useState('');

  const [apiResponse, setApiResponse] = useState(false);
  const submitForm = async () => {
    let formData = {
      name: name,
      mobile: mobile,
      query: query,
    };

    // Make API call to backend server
    const apiUrl = 'http://10.0.2.2:8080/contact';
    try {
      const response = await axios.post(apiUrl, formData);

      if (response.status === 200) {
        console.log(response.data);
        setApiResponse(true);
      }

      console.warn(response.status);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={{backgroundColor: '#fefae0'}}>
      <View style={styles.container}>
        <Text>Contact Screen</Text>
        <Text>{apiResponse && 'Form Submitted'}</Text>

        {!apiResponse && (
          <>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              onChangeText={setName}
              value={name}
            />

            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile"
              onChangeText={setMobile}
              value={mobile}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Your Query</Text>
            <TextInput
              style={styles.input}
              placeholder="Please provide your query"
              onChangeText={setQuery}
              value={query}
              multiline
              numberOfLines={5}
            />
            <Button title="Send" color="red" onPress={submitForm} />
          </>
        )}
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
  input: {
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderColor: 'blue',
    borderWidth: 1,
  },
});
