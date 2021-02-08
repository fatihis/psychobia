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
import firestore from '@react-native-firebase/firestore';
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
      _uid: '',
      emailDanismanHazir: 'danisman@gmail.com',
      emailUserHazir: 'user@gmail.com',
      passwordDanismanHazir: '123456',
      passwordUserHazir: '123456',
      user: {
        email: '',
        name: '',
        uid: '',
        userType: '',
      },
    };
  }
  componentDidMount() {}
  handleEmail = (text) => {
    this.setState({email: text});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };
  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  getUserFb = async () => {
    const gotUser = await firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .get();
    this.setState({user: gotUser.data()});
  };
  onPressLogin(email, password) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.getUserFb();
        this.timeout(1000).then(() => {
          if (this.state.user.userType == 'user') {
            this.props.navigation.navigate('AppNavigator');
          } else {
            this.props.navigation.navigate('AppNavigatorD');
          }
        });
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
                  placeholder="Şifre"
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
                <View style={styles.kayit}>
                  <Text style={styles.kayitText}>
                    Henüz kayıt olmadınız mı?{' '}
                    <Text
                      onPress={() => this.props.navigation.navigate('SignUp')}
                      style={styles.kayitTiklaText}>
                      Tıklayın
                    </Text>
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.userGiris}
                onPress={() =>
                  this.onPressLogin(
                    this.state.emailUserHazir,
                    this.state.passwordUserHazir,
                  )
                }>
                <Text>User Girişi</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.danismanGiris}
                onPress={() =>
                  this.onPressLogin(
                    this.state.emailDanismanHazir,
                    this.state.passwordDanismanHazir,
                  )
                }>
                <Text>Danisman Girişi</Text>
              </TouchableOpacity>
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
  userGiris: {
    width: 60,
    height: 40,
    borderWidth: 1,
  },
  danismanGiris: {
    width: 60,
    height: 40,
    borderWidth: 1,
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
    opacity: 1,
    color: 'black',
    padding: 10,
  },
  kayitText: {
    paddingTop: 9,
    fontSize: 13,
    textAlign: 'center',
  },
  kayitTiklaText: {
    color: 'purple',
    textAlign: 'center',
  },
  /* kayit: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },*/
  loginButton: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 20,
  },
  loginText: {
    textAlign: 'center',
  },
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
