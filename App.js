import React, {Component, Fragment} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import Router from './pages/Router';

//APP COMP START

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initPage: '',
      isLogin: false,
    };
  }

  static displayName = App.name;
  componentDidMount() {
    /*if (this.state.isLogin == false) {
      alert(this.state.initPage);
    }*/
  }
  render() {
    return (
      <>
        <Fragment>
          <StatusBar
            barStyle="light"
            showHideTransition="fade"
            backgroundColor="#cb91a3"></StatusBar>
          <Router />
        </Fragment>
      </>
    );
  }
}

//APP COMP END
