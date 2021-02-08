import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import auth from '@react-native-firebase/auth';
function ModalSearch({navigation}) {
  const consUid = navigation.getParam('itemId');
  const [uid, setUid] = useState('');
  const [name, setName] = useState('');
  const [point, setPoint] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [chosenDate, setChosenDate] = useState('');
  const [chosenDateS, setChosenDateS] = useState(new Date());
  const [consultantName, setConsultantName] = useState('');
  const [perks, setPerks] = useState('');
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(consUid)
      .onSnapshot((documentSnapshot) => {
        console.log('User data: ', documentSnapshot.data());
        setPoint(documentSnapshot.data().point);
        setName(documentSnapshot.data().name);
        setPerks(documentSnapshot.data().perks);
      });

    return () => subscriber();
  }, [consUid]);

  const showPicker = () => {
    setIsVisible(true);
  };
  const hidePicker = () => {
    setIsVisible(false);
  };
  const handlePicker = (datetime) => {
    setChosenDate(moment(datetime).format('MMMM, Do YYYY HH:mm'));
    console.log(chosenDate);
    setChosenDateS(datetime);
    hidePicker();
  };

  /*const getConsultantName = async () => {
    const gotUser = await firestore().collection('Users').doc(consUid).get();
    console.log('name: ', gotUser);
    setConsultantName(gotUser.name);
  };*/
  const setAppointment = () => {
    console.log(chosenDate);
    const date = new Date(chosenDateS);
    console.log(date);
    console.log('durum,', firestore.Timestamp.fromDate(date));
    firestore()
      .collection('Appointment')
      .add({
        appDate: firestore.Timestamp.fromDate(date),
        nameConsultant: name,
        uidConsultant: consUid,
        uidUser: auth().currentUser.uid,
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.perks}>{perks}</Text>
      <Text>{name}</Text>
      <Text>Point: {point}</Text>
      <Text>{chosenDate}</Text>
      <TouchableOpacity style={styles.button} onPress={showPicker}>
        <Text style={{color: 'white'}}>Tarih seçin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={setAppointment}>
        <Text style={{color: 'white'}}>Randevu oluştur</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        display="spinner"
        isVisible={isVisible}
        mode="datetime"
        onConfirm={(datetime) => handlePicker(datetime)}
        onCancel={hidePicker}
        excludeTimes={[
          new Date().setHours(new Date().setMinutes(new Date(), 0), 17),
        ]}
      />
    </View>
  );
}
export default ModalSearch;
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
  perks: {
    paddingHorizontal: 20,
    marginBottom: 20,
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
  button2: {
    width: 250,
    height: 50,
    backgroundColor: '#ff9cde',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 15,
  },
});
