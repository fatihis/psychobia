import React, {Component} from 'react';

import {StyleSheet, StatusBar} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {AppContainer, createAppContainer} from 'react-navigation';
import Login from './pages/Login';
import {App} from './App';
const AppNavigator = createStackNavigator(
  {
    App: {screen: App},
  },
  {
    initialRoutName: 'App',
  },
);

const styles = StyleSheet.create({});
export default AppContainer = createAppContainer(AppNavigator);
