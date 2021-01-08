import React, {Component, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
function ModalAppointmentDanisman({navigation}) {
  itemKey = navigation.getParam('itemId');
  const [uidUser, setUidUser] = useState('');
  const [uidConsultant, setUidConsultant] = useState('');
  useEffect(() => {
    const subscriber = firestore()
      .collection('Appointment')
      .doc(itemKey)
      .onSnapshot((documentSnapshot) => {
        console.log('User data: ', documentSnapshot.data());
        setUidUser(documentSnapshot.data().uidUser);
        setUidConsultant(documentSnapshot.data().uidConsultant);
      });

    return () => subscriber();
  }, [itemKey]);

  return (
    <View>
      <Text> textInComponent{uidConsultant} </Text>
    </View>
  );
}
export default ModalAppointmentDanisman;
