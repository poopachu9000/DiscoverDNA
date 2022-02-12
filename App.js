import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import GeneticScreen from './screens/GeneticScreen';
import GeneticResults from './screens/GeneticResults';
export default class App extends React.Component{
  render(){
  return (
    <View >
<AppContainer/>

    </View>
  )
  }
}

var AppNavigator = createSwitchNavigator({
HomeScreen: HomeScreen,
GeneticScreen: GeneticScreen,
  GeneticResults:GeneticResults,
});

const AppContainer = createAppContainer(
  AppNavigator
);
