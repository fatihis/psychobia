import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RoomScreen from './screensConsultant/RoomScreen';
import CallScreen from './screensConsultant/CallScreen';
import JoinScreen from './screensConsultant/JoinScreen';

function ModalAppointmentDanisman({navigation}) {
  itemK = navigation.getParam('itemK');
  const [uidUser, setUidUser] = useState('');
  const [uidConsultant, setUidConsultant] = useState('');
  const [appointmentId, setAppointmentId] = useState('');
  useEffect(() => {
    console.log('itemk:', itemK);
    setAppointmentId(itemK);
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

  const screens = {
    ROOM: 'JOIN_ROOM',
    CALL: 'CALL',
    JOIN: 'JOIN',
  };

  const [screen, setScreen] = useState(screens.ROOM);
  const [roomId, setRoomId] = useState('');

  let content;

  switch (screen) {
    case screens.ROOM:
      content = (
        <RoomScreen
          roomId={appointmentId}
          setRoomId={setRoomId}
          screens={screens}
          setScreen={setScreen}
        />
      );
      break;

    case screens.CALL:
      content = (
        <CallScreen
          roomId={appointmentId}
          screens={screens}
          setScreen={setScreen}
        />
      );
      break;

    case screens.JOIN:
      content = (
        <JoinScreen
          roomId={appointmentId}
          screens={screens}
          setScreen={setScreen}
        />
      );
      break;

    default:
      content = <Text>Wrong Screen</Text>;
  }

  return <SafeAreaView style={styles.container}>{content}</SafeAreaView>;
}
export default ModalAppointmentDanisman;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
