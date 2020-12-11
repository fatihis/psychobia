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
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {AppContainer, createAppContainer} from 'react-navigation';

import auth from '@react-native-firebase/auth';

export default class Login extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      initializing: false,
      setInitializing: false,
      password: '',
      accepted: true,
      uid: '',
    };
  }
  componentDidMount() {}
  handleEmail = (text) => {
    this.setState({email: text});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };

  onPressLogin(email, password) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({uid: auth().currentUser.uid});

        this.props.navigation.navigate('AppNavigator');
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          alert('Şifreniz hatalı.');
        }

        if (error.code === 'auth/invalid-email') {
          alert('Böyle bir email adresi kayıtlı değil!');
        }

        console.error(error);
      });
  }
  render() {
    return (
      <>
        <StatusBar barStyle="light" />

        <View style={styles.container}>
          <ImageBackground
            source={require('./assets/loginbg.jpg')}
            style={styles.bgimage}>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/logod.png')}
            />
            <Image
              style={styles.textLogo}
              source={require('./assets/psychobiatext.png')}
            />
            <ScrollView
              alwaysBounceHorizontal={true}
              alwaysBounceVertical={true}>
              <View style={styles.loginPart}>
                <TextInput
                  {...this.props}
                  placeholder="Email"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  returnKeyType={'next'}
                  onChangeText={this.handleEmail}
                  style={styles.input}></TextInput>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={this.handlePassword}
                  style={styles.input}></TextInput>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() =>
                    this.onPressLogin(this.state.email, this.state.password)
                  }>
                  <Text style={styles.loginText}>GİRİŞ</Text>
                </TouchableOpacity>
                <Text style={styles.kayitText}>
                  Henüz kayıt olmadınız mı?{' '}
                  <Text
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    style={styles.kayitTiklaText}>
                    Tıklayın
                  </Text>
                </Text>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textLogo: {
    flex: 1,
    width: '70%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  tinyLogo: {
    height: 150,
    width: 150,
    marginTop: 50,
    alignSelf: 'center',
    opacity: 0.7,
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  input: {
    width: '100%',
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: '#c5d7e8',
    opacity: 0.5,
    color: '#0c1685',
    padding: 10,
  },
  kayitText: {
    paddingTop: 9,
    fontSize: 13,
  },
  kayitTiklaText: {
    color: 'purple',
  },
  loginButton: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 20,
  },
  loginText: {textAlign: 'center'},
  loginPart: {
    flex: 6,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    borderColor: 'red',
    marginTop: 70,
    backgroundColor: 'white',
    opacity: 0.6,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
});
