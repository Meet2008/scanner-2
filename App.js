import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {CreateAppContainer} from 'react-navigation';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';
import ScanScreen from './screens/ScanScreen';

export default class App extends React.Component {
  render(){
    return(
       <AppContainer/>
    )
  }
}

const TabNavigator =  CreateBottomTabNavigator({
  Scan:{ScanScreen}
});

const AppContainer = CreateAppContainer(TabNavigator);