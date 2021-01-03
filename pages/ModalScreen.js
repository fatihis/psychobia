import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
//import {observer} from 'mobx-react';

import DatePicker from 'react-datepicker';

function ModalScreen({navigation}) {
  const consUid = navigation.getParam('itemId');
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 12 ? 'text-success' : 'text-error';
  };

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

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {consUid}</Text>
      <Text>Consultant Name: {name}</Text>
      <Text>Point: {point}</Text>
      <DatePicker
        showTimeSelect
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeClassName={handleColor}
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
});
