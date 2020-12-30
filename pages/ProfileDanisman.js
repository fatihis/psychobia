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

export default class ProfileDanisman extends Component {
  ListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={({item}) => this.itemOnPress}
        style={styles.ItemComp}>
        <Image style={styles.ItemImage} source={{uri: item.picture}}></Image>
        <View style={styles.ItemTextWrapper}>
          <Text>{item.name}</Text>
          <Text>{item.star}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <ImageBackground
        source={require('./assets/profilebg.jpg')}
        style={styles.bgimage}>
        <FlatList
          renderItem={this.ListItem}
          keyExtractor={(item) => item._id}
          data={ProfileData}
          style={styles.FlatList}></FlatList>
        <View style={styles.settingSection}>
          <View style={styles.settingPart}></View>
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
    borderRadius: 3,
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
    borderColor: '#8E9383',
    marginTop: 10,

  },

  settingSection: {
    flex: 3,
    
  },
});
