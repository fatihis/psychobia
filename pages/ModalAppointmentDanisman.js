import React, {Component, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
function ModalAppointmentDanisman({navigation}) {
  itemK = navigation.getParam('itemK');
  const [uidUser, setUidUser] = useState('');
  const [uidConsultant, setUidConsultant] = useState('');
  useEffect(() => {
    console.log('itemk:', itemK);
    const subscriber = firestore()
      .collection('Appointment')
      .doc(itemK)
      .onSnapshot((documentSnapshot) => {
        console.log('User data: ', documentSnapshot.data());
        setUidUser(documentSnapshot.data().uidUser);
        setUidConsultant(documentSnapshot.data().uidConsultant);
      });

    return () => subscriber();
  }, [itemK]);

  return (
    <View>
      <Text> textInComponent{uidConsultant} </Text>
    </View>
  );
}
export default ModalAppointmentDanisman;
