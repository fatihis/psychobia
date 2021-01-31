import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Image, View, Text} from 'react-native';

import bgImage from './sc3.png';

export default class Screen1 extends Component {
  static backgroundColor = '#9a41d9';
  navLogin() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            blurRadius={0}
            source={bgImage}
            style={styles.image}
            resizeMode={'contain'}
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.navLogin()}></TouchableOpacity>
        <View style={styles.textContainer}>
          <Text onPress={() => this.navLogin()} style={styles.textTitle}>
            ONLINE ARRANGEMENT
          </Text>
          <Text style={styles.lilText}>Set everything with just one click</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  loginButton: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    height: '27%',
    paddingLeft: 25,
    backgroundColor: 'transparent',
  },
  textTitle: {
    fontSize: 46,
    fontFamily: 'Bebas Neue',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'transparent',
  },
  lilText: {
    fontSize: 17,
    fontFamily: 'Montserrat',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'transparent',
  },
});
