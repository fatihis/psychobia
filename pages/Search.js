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

export default class Search extends Component {
  state = {
    text: '',
    contacts: Data,
  };
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
  searchFilter = (text) => {
    const newData = Data.filter((item) => {
      const listItem = `${item.name.toLowerCase()} ${item.star.toLowerCase()}`;
      return listItem.indexOf(text.toLowerCase()) > -1;
    });
    this.setState({
      contacts: newData,
    });
  };
  renderHeader = () => {
    const {text} = this.state;
    return (
      <View styele={styles.searchContainer}>
        <TextInput
          onChangeText={(text) => {
            this.setState({
              text,
            });
            this.searchFilter(text);
          }}
          value={text}
          placeholder="Danışman ara"
          style={styles.searchInput}
        />
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        source={require('./assets/searchbg.jpg')}
        style={styles.bgimage}>
        <View style={styles.MainContainer}>
          <Text style={styles.danisanlarText}>Danışmanlar</Text>
          <FlatList
            ListHeaderComponent={this.renderHeader()}
            renderItem={this.ListItem}
            keyExtractor={(item) => item._id}
            data={this.state.contacts}
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
    marginBottom: 50,
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
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    fontSize: 14,
    backgroundColor: '#ECE7E7',
    padding: 10,
    height: 38,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#cacaca',
    color: '#262626',
    fontWeight: '600',
    marginBottom: 20,
  },
});
