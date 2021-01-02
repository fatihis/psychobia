import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class ModalScreen extends Component {
    
   /* state = {
        text: '',
        users: [],
      };
      itemOnPress(item) {
        alert('item: ' + item.uid);
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
                key: documentSnapshot.uid,
              });
            });
            this.setState({users: users});
            console.log(this.state.users);
          });
        return () => subscriber();
      }
       ListItem = ({item, index}) => {
        return (
   
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
 
        );
      };*/

    render() {
        const {goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
              <Text >Consultant Uid:  </Text>
              <TouchableOpacity 
              style={styles.geri}
              title="Geri"
              onPress={() => {goBack()}}>
                  <Text style={{textAlign:'center', color:'white'}}>Geri</Text>
                  
              </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',   
    },
    geri: {
        backgroundColor: 'blue',
        width: 100,
        height: 30,
    }
});