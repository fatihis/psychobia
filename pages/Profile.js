import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import call from 'react-native-phone-call';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        name: '',
        uid: '',
      },
      args: {
        number: '905070275365',
        prompt: false, //
      },
    };
    this.getUserFb();
  }
  signOut() {
    //auth().getInstance().signOut();
    alert('Succesfully signed out');
    this.props.navigation.navigate('WelcomeInformation');
  }
  sendEmail() {
    auth()
      .sendPasswordResetEmail(this.state.user.email)
      .then(function () {
        alert('Email has been sent');
      })
      .catch(function (error) {
        console.log('An error happened.');
      });
  }
  callUs() {
    call(this.state.args).catch(console.error);
  }
  getUserFb = async () => {
    const gotUser = await firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .get();
    this.setState({user: gotUser.data()});
  };
  render() {
    return (
      <ImageBackground
        source={require('./assets/profilebg.jpg')}
        style={styles.bgimage}>
        <View style={styles.settingSection}>
          <View style={styles.profileDetails}>
            <View style={styles.verticalContainer}>
              <View style={styles.name}>
                <Text style={styles.text}>{this.state.user.name}</Text>
              </View>
              <View style={styles.userType}>
                <Text style={styles.text2}>{this.state.user.email}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.settingPart}>
            <Text
              onPress={() => this.sendEmail()}
              style={styles.settingPartText}>
              Change Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingPart}>
            <Text style={styles.settingPartText}>KVKK and Privacy Terms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingPart}>
            <Text onPress={() => this.callUs()} style={styles.settingPartText}>
              Call us
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.signOut()}
            style={styles.settingPart}>
            <Text style={styles.settingPartText}>Sign Out</Text>
          </TouchableOpacity>
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
  image: {
    flex: 1,
    borderRadius: 50,
    width: '40%',
    height: '30%',
  },
  profileDetails: {
    flex: 0.3,

    borderWidth: 0.4,
    marginBottom: 10,
    height: '50%',
    flexDirection: 'row',
  },
  verticalContainer: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'column',
  },
  settingPart: {
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(249, 199, 199, 0.8)',
  },
  settingPartText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    paddingTop: 10,
  },
  prfimage: {
    flex: 1,
    marginRight: 25,
    borderWidth: 2,
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
  settingSection: {
    flex: 3,
  },
  text: {
    fontSize: 35,
  },
  text2: {
    fontSize: 27,
  },
});
