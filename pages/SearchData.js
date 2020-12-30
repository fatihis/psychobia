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

function SearchData() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .where('userType', '==', 'consultant')
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
  searchFilter = (text) => {
    const newData = Data.filter((item) => {
      const listItem = `${item.name.toLowerCase()} ${item.uid.toLowerCase()}`;
      return listItem.indexOf(text.toLowerCase()) > -1;
    });
    this.setState({
      users: newData,
    });
  };

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
          <TouchableOpacity style={styles.itemContainter}>
            <View
              style={{
                height: 60,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.insider}>Consultant Name: {item.name}</Text>
              <Text style={styles.insider}>Consultant Uid: {item.uid}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

export default SearchData;

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
