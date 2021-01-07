import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import auth from '@react-native-firebase/auth';
function ModalScreen({navigation}) {
  const consUid = navigation.getParam('itemId');
  const [uid, setUid] = useState('');
  const [name, setName] = useState('');
  const [point, setPoint] = useState(0);
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(consUid)
      .onSnapshot((documentSnapshot) => {
        console.log('User data: ', documentSnapshot.data());
        setPoint(documentSnapshot.data().point);
        setName(documentSnapshot.data().name);
      });

    return () => subscriber();
  }, [consUid]);

  const [isVisible, setIsVisible] = useState(false);
  const [chosenDate, setChosenDate] = useState('');
  const [consultantName, setConsultantName] = useState('');
  const showPicker = () => {
    setIsVisible(true);
  };
  const hidePicker = (datetime) => {
    setIsVisible(false);
    setChosenDate(moment(datetime).format('MMMM, Do YYYY HH:mm'));
    console.log(chosenDate);
  };
  const handlePicker = (datetime) => {
    hidePicker(datetime);
  };
  /* const getConsultantName = async () => {
    const gotUser = await firestore().collection('Users').doc(consUid).get();
    console.log('name: ', gotUser);
    setConsultantName(gotUser.name);
  };*/
  const setAppointment = () => {
    firestore()
      .collection('Appointment')
      .add({
        appDate: firestore.FieldValue.serverTimestamp(chosenDate),
        nameConsultant: name,
        uidConsultant: consUid,
        uidUser: auth().currentUser.uid,
      });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {consUid}</Text>
      <Text>Consultant Name: {name}</Text>
      <Text>Point: {point}</Text>
      <Text>{chosenDate}</Text>
      <TouchableOpacity style={styles.button} onPress={showPicker}>
        <Text style={{color: 'white'}}>Show DatePicker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={setAppointment}>
        <Text style={{color: 'white'}}>Set Appointment</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="datetime"
        onConfirm={(datetime) => handlePicker(datetime)}
        onCancel={hidePicker}
    
      />
    
    </View>
  );
}
export default ModalScreen;
/*export default class ModalScreen extends Component {
  render() {
    const {goBack, itemId} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Consultant Uid: {itemId} </Text>
        <TouchableOpacity
          style={styles.geri}
          title="Geri"
          onPress={() => {
            goBack();
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>Geri</Text>
        </TouchableOpacity>
      </View>
    );
  }
}*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  geri: {
    backgroundColor: 'blue',
    width: 100,
    height: 30,
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#330066',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 15,
  },
});
