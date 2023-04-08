import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from './components/common/Header';
import Home from './components/Home';

export default function App() {
  const name = 'Amit';
  return (
    <ScrollView style={{backgroundColor: '#fefae0'}}>
      <Header />
      <Home />
      <PropComp name={name} />
      <BalanceComp />
    </ScrollView>
  );
}

const PropComp = (props: any) => {
  return (
    <View>
      <Text>My Name is {props.name}</Text>
    </View>
  );
};

const BalanceComp = () => {
  // let balance = 0;

  const [balance, setBalance] = useState(0);

  console.log('Balance is - ', balance);
  console.warn('Balance is - ', balance);

  const increment = () => {
    let newBalance = balance + 1;

    setBalance(newBalance);
  };

  const decrement = () => {
    let newBalance = balance - 1;

    setBalance(newBalance);
  };
  return (
    <View>
      <Text>User Balance :- {balance}</Text>

      <Button title="Increment +" onPress={increment} />
      <Button title="Decrement -" onPress={decrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  textClass: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
});
