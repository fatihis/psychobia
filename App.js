import React, {Component, Fragment} from 'react';

import {StatusBar} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

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
    messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then((x) => console.log('com', x))
      .catch((e) => console.log(e));
    messaging().onMessage(async (remoteMessage) => {
      alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
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
