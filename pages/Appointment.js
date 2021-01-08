import React, {Component, setState} from 'react';
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
import moment from 'moment';

export default class Appointment extends Component {
  itemOnPress = (itemK) => {
    console.log(itemK);
    this.props.navigation.navigate('ModalAppointmentUser', {itemKey: itemK});
  };
  constructor(props) {
    super(props);
    this.state = {
      appUserUid: '',
      appConsultantUid: '',
      appDate: '',
      usersL: [],
    };
  }
  componentDidMount() {
    const currentUid = auth().currentUser.uid;
    const subscriber = firestore()
      .collection('Appointment')
      .where('uidUser', '==', currentUid)
      .onSnapshot((querySnapshot) => {
        const users = [];

        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        this.setState({usersL: users});
        console.log(this.state.usersL);
      });

    return () => subscriber();
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/appointmentbg.jpg')}
        style={styles.bgimage}>
        <FlatList
          data={this.state.usersL}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainter}
              onPress={() => this.itemOnPress(item.key)}>
              <View
                style={{
                  height: 60,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.insider}>
                  Consultant Name: {item.nameConsultant}
                </Text>
                <Text style={styles.insider}>
                  Date:{' '}
                  {moment(item.appDate.toDate()).format(
                    'MMMM Do YYYY, h:mm:ss',
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
  insider: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 5,
  },
  itemContainter: {
    backgroundColor: 'rgba(235, 228, 228, 0.8)',
    marginBottom: 20,
  },
});
