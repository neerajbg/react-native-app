import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from './components/common/Header';
import Home from './components/screens/Home';
import Contact from './components/screens/Contact';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './components/screens/About';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Setting from './components/screens/Setting';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  const name = 'Amit';
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen
          name="About"
          component={About}
          options={{title: 'This is About Screen'}}
        />
      </Stack.Navigator> */}
      <MyTab />
    </NavigationContainer>
  );
}

const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: {fontSize: 20},
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};
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
