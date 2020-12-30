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

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AppointmentData from './AppointmentData';
import Data from './components/Data';
import {Alert} from 'react-native';
export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      accepted: true,
      appUserUid: '',
      appConsultantUid: '',
      appDate: '',
      users: [],
      setUsers: [],
    };
  }
  render() {
    return <AppointmentData></AppointmentData>;
  }

  /*getAppointment = async () => {
    const currentUid = auth().currentUser.uid;
    firestore()
      .collection('Appointment')
      .where('uidUser', '==', currentUid)
      .get()
      .then((querySnapshot) => {
        console.log('Total Appointments: ', querySnapshot.size);

        querySnapshot.forEach((documentSnapshot) => {
          this.state.users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });

          console.log('liste', this.state.users);
        });
      });
  };
  componentDidMount() {
    this.getAppointment();
  }
  ListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => this.itemOnPress}
        style={styles.ItemComp}>
        <Text>{item.uidUser}</Text>
        <Text>{item.uidConsultant}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <ImageBackground
        source={require('./assets/appointmentbg.jpg')}
        style={styles.bgimage}>
        <FlatList
          renderItem={({item}) => this.ListItem}
          keyExtractor={(item) => item.uidUser}
          data={this.state.users}
          style={styles.FlatList}
        />
      </ImageBackground>
    );
  }*/
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
  },
  appointmentsText: {
    alignSelf: 'center',
    fontSize: 35,
    marginTop: 20,
  },
  FlatList: {
    marginTop: 30,
    flex: 1,
  },
  ItemComp: {
    flex: 1,
    backgroundColor: 'red',
  },
  ItemTextWrapper: {justifyContent: 'space-around'},
});
