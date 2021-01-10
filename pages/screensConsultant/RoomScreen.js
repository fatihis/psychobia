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
        <Button title="Call User" onPress={() => onCallOrJoin(screens.CALL)} />
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
    opacity: 0,
    backgroundColor: '#aaa',
  },
  buttonContainer: {
    margin: 5,
  },
});
