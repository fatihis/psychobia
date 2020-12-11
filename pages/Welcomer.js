import React, {Component, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AppContainer, createAppContainer} from 'react-navigation';

// Set an initializing state whilst Firebase connects
const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();

function onAuthStateChanged(user) {
  setUser(this.state.user);
  if (initializing) setInitializing(false);
}
function handler(user) {
  if (!user) {
    this.props.navigation.navigate('Login');
  } else {
    this.props.navigation.navigate('AppNavigator');
  }
}

class Welcomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      initializing: false,
      setInitializing: false,
      password: '',
      accepted: true,
    };
  }
  componentDidMount() {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }
}
export default handler(this.state.user);
