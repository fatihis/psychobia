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
      dataToList: [],
    };
  }

  getAppointment = async () => {
    const currentUid = auth().currentUser.uid;
    firestore()
      .collection('Appointment')
      .where('uidUser', '==', currentUid)
      .get()
      .then((querySnapshot) => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach((documentSnapshot) => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          this.setState({appUserUid: documentSnapshot.data().uidUser});
          this.setState({
            appConsultantUid: documentSnapshot.data().uidConsultant,
          });
          this.setState({
            appDate: documentSnapshot.data().appDate,
          });
          console.log('state', this.state.appUserUid);
          console.log('state', this.state.appDate);
          console.log('state', this.state.appConsultantUid);
          //çok sayıda yapmak için yukarıdaki foreachi kullanmayı unutma
          this.setState({
            dataToList: [
              {
                userUid: this.state.appUserUid,
                consultantUid: this.state.appConsultantUid,
              },
            ],
          });
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
        source={require('./assets/appointmentbg.jpg')}
        style={styles.bgimage}>
        <View style={styles.MainContainer}>
          <Text style={styles.appointmentsText}>Appointments</Text>
          <FlatList
            renderItem={this.ListItem}
            keyExtractor={(item) => item._id}
            data={dataToList}
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
  appointmentsText: {
    alignSelf: 'center',
    fontSize: 35,
    marginTop: 20,
  },
  FlatList: {
    marginTop: 30,
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
  ItemTextWrapper: {justifyContent: 'space-around'},
  ItemImage: {
    width: 50,
    height: '100%',
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
