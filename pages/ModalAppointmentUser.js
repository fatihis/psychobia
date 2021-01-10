import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  RecyclerViewBackedScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RoomScreen from './screens/RoomScreen';
import CallScreen from './screens/CallScreen';
import JoinScreen from './screens/JoinScreen';

import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from 'react-native-webrtc';

function ModalAppointmentUser({navigation}) {
  itemKey = navigation.getParam('itemKey');
  const [uidUser, setUidUser] = useState('');
  const [uidConsultant, setUidConsultant] = useState(0);
  const [appointmentId, setAppointmentId] = useState('');
  useEffect(() => {
    setAppointmentId(itemKey);
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
export default ModalAppointmentUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
