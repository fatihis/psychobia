import React, {Component, useState} from 'react';
//import {observable} from 'mobx-react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export default class Search extends Component {
  state = {
    text: '',
    users: [],
  };
  itemOnPress(itemUid) {
    this.props.navigation.navigate('ModalScreenSearch', {itemId: itemUid});
  }
  componentDidMount() {
    const subscriber = firestore()
      .collection('Users')
      .where('userType', '==', 'consultant')
      .onSnapshot((querySnapshot) => {
        const users = [];

        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.data().uid,
          });
        });
        this.setState({users: users});
        console.log(this.state.users);
      });
    return () => subscriber();
  }
  ListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainter}
        onPress={() => this.itemOnPress(item.uid)}>
        <View
          style={{
            height: 60,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.insider}>Consultant Name: {item.name}</Text>
          <Text style={styles.insider}>Consultant Uid: {item.uid}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  searchFilter = (text) => {
    const newData = this.state.users.filter((item) => {
      const listItem = `${item.name.toLowerCase()} ${item.uid.toLowerCase()}`;
      return listItem.indexOf(text.toLowerCase()) > -1;
    });
    this.setState({
      users: newData,
    });
  };
  renderHeader = () => {
    const {text} = this.state;
    return (
      <View style={styles.searchContainer}>
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
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <ImageBackground
        source={require('./assets/searchbg.jpg')}
        style={styles.bgimage}>
        <View style={styles.MainContainer}>
          <Text style={styles.danisanlarText}>Danışmanlar</Text>
          <FlatList
            ListHeaderComponent={this.renderHeader()}
            renderItem={this.ListItem}
            keyExtractor={(item) => item.uid}
            data={this.state.users}
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
  itemContainter: {
    backgroundColor: 'rgba(235, 228, 228, 0.8)',
    marginBottom: 20,
    borderRadius: 20,
  },
  insider: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 5,
  },
});
