import React, {Component, useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {
  RTCView,
  mediaDevices,
  MediaStream,
  MediaStreamConstraints,
  RTCPeerConnection,
} from 'react-native-webrtc';

const configuration = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

let peerConnection = null;
let localStream = null;
let remoteStream = null;
let roomDialog = null;
let roomId = null;

const createRoom = async () => {
  peerConnection = new RTCPeerConnection(configuration);
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  const roomWithOffer = {
    offer: {
      type: offer.type,
      sdp: offer.sdp,
    },
  };
  console.log(roomWithOffer);
  const roomRef = await firestore().collection('Rooms').add(roomWithOffer);
  const roomId = roomRef.id;
};
function ModalAppointment({navigation}) {
  itemKey = navigation.getParam('itemKey');
  const [uidUser, setUidUser] = useState('');
  const [uidConsultant, setUidConsultant] = useState(0);
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
      <Text> textInComponent {uidUser} </Text>
      <TouchableOpacity
        onPress={createRoom}
        style={{height: 100, width: 200, backgroundColor: 'red'}}>
        <Text>Start a Call</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ModalAppointment;
