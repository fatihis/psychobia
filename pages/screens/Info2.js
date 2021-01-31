import React, {Component} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

import bgImage from './sc11.png';

export default class Screen1 extends Component {
  static backgroundColor = '#ff3631';

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
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>QUALITY VIDEO CALL</Text>
          <Text style={styles.lilText}>Connection with P2P technology.</Text>
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
