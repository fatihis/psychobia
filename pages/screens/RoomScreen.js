import React, {useState} from 'react';
import {Text, StyleSheet, Button, View, TextInput} from 'react-native';

export default function RoomScreen({setScreen, screens, setRoomId, roomId}) {
  const onCallOrJoin = (screen) => {
    if (roomId.length > 0) {
      setScreen(screen);
    }
  };

  return (
    <>
      <TextInput style={styles.input} value={roomId} onChangeText={setRoomId} />
      <View style={styles.buttonContainer}>
        <Button
          title="Join Appointment"
          onPress={() => onCallOrJoin(screens.JOIN)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 30,
  },
  input: {
    margin: 20,
    height: 40,
    opacity: 0,
    backgroundColor: '#aaa',
  },
  buttonContainer: {
    margin: 5,
  },
});
