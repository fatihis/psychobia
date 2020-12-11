import React, {Component} from 'react';
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
  FlatList,
} from 'react-native';
import ProfileData from './components/ProfileData';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const _uid = auth().currentUser.uid;

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        name: '',
        uid: '',
      },
    };
    this.getUserFb();
  }
  getUserFb = async () => {
    const gotUser = await firestore().collection('Users').doc(_uid).get();
    this.setState({user: gotUser.data()});
    alert(this.state.user.name);
  };
  render() {
    return (
      <ImageBackground
        source={require('./assets/profilebg.jpg')}
        style={styles.bgimage}>
        <View style={styles.settingSection}>
          <TouchableOpacity style={styles.settingPart}></TouchableOpacity>
          <View style={styles.settingPart}></View>
          <View style={styles.settingPart}></View>
          <View style={styles.settingPart}></View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  settingPart: {
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(249, 199, 199, 0.6)',
  },
  ItemComp: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(235, 228, 228, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },
  ItemImage: {
    width: 120,
    height: '100%',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  ItemTextWrapper: {justifyContent: 'space-around'},
  danisanlarText: {
    alignSelf: 'center',
    fontSize: 35,
    marginTop: 20,
  },
  FlatList: {
    flex: 1,
    borderWidth: 3,
    marginBottom: 10,
  },

  settingSection: {
    flex: 3,
  },
});
