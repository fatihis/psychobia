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
import Data from './components/Data';

export default class MainPage extends Component {
  itemOnPress(item) {
    alert('item: ' + item._id);
  }
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
        source={require('./assets/mainbg.jpg')}
        style={styles.bgimage}>
        <View style={styles.MainContainer}>
          <Text style={styles.danisanlarText}>Danışmanlar</Text>
          <FlatList
            renderItem={this.ListItem}
            keyExtractor={(item) => item._id}
            data={Data}
            style={styles.FlatList}
          />
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
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  ItemComp: {
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(235, 228, 228, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 30,
  },
  FlatList: {
    marginTop: 30,
  },
  ItemImage: {
    width: 50,
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
});
