import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import moment from 'moment';


function AppointmentData() {

 
  function itemOnPress(itemUid) {
 
  }
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const currentUid = auth().currentUser.uid;
  useEffect(() => {
    const subscriber = firestore()
      .collection('Appointment')
      .where('uidUser', '==', currentUid)
      .onSnapshot((querySnapshot) => {
        const users = [];

        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <ImageBackground
      source={require('./assets/appointmentbg.jpg')}
      style={styles.bgimage}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemContainter}
          onPress={itemOnPress(item)}>
            <View
              style={{
                height: 60,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.insider}>
                Consultant Name: {item.nameConsultant}
              </Text>
              <Text style={styles.insider}>
                Date: {moment(item.appDate.toDate()).format('MMMM Do YYYY, h:mm:ss')}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

export default AppointmentData;

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  itemContainter: {
    backgroundColor: 'rgba(235, 228, 228, 0.8)',
    marginBottom: 20,
  },
  insider: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 5,
  },
});
