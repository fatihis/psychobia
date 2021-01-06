import React, {Component} from 'react';

import Swiper from 'react-native-swiper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  AppRegistry,
} from 'react-native';

import Data from './components/Data';

export default class MainPage extends Component {
  onPress(){
   alert('Bilgilendirme');
  }
  render() {
    return (
      <ImageBackground
        source={require('./assets/mainbg.jpg')}
        style={styles.bgimage}>
        <ScrollView style={styles.scrollView}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            showsPagination={false}
            autoplay={true}
            buttonWrapperStyle={{
              alignItems: 'flex-start',
              marginTop: 130,
              color: 'red',
            }}>
            <View style={styles.slide1}>
              <ImageBackground
                source={require('./assets/pexels-artem-podrez-4492189.png')}
                style={styles.slider}>
                <Text
                  style={{
                    marginTop: 175,
                    marginLeft: 110,
                    textAlign: 'right',
                    width: 230,
                  }}>
                  Dünyanın her yerinden istediğiniz psikologla görüşebilirsiniz
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.slide2}>
              <ImageBackground
                source={require('./assets/pexels-ketut-subiyanto-4474047.png')}
                style={styles.slider}>
                <Text style={{marginTop: 55, marginLeft: 40, width: 150}}>
                  Tek tuşla kolayca randevu alabilirsiniz
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.slide3}>
              <ImageBackground
                source={require('./assets/pexels-karolina-grabowska-4491440.png')}
                style={styles.slider}>
                <Text style={{}}></Text>
              </ImageBackground>
            </View>
          </Swiper>

          <View style={styles.kutular}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 30,
              }}>
              <View style={styles.kutu}>
                <TouchableOpacity
                onPress={this.onPress}>
                   <Text>Bireysel Psikoterapi</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
                <TouchableOpacity>
                  <Text>Aile ve Çift Terapisi</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
                 <TouchableOpacity>
                 <Text>Aile Danışmanlığı</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 30,
              }}>
              <View style={styles.kutu}>
              <TouchableOpacity>
                 <Text>İlişki Danışmanlığı</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
              <TouchableOpacity>
                <Text>Bağımlılık Psikoterapisi</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
              <TouchableOpacity>
                  <Text>Psikolojik Travma Psikoterapisi</Text>
              </TouchableOpacity>
              </View>
            </View>
            
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 30,
              }}>
              <View style={styles.kutu}>
              <TouchableOpacity>
                 <Text>Çocuk ve Ergen Danışmanlığı</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
              <TouchableOpacity>
                <Text>Öfke Kontrolü Psikoterapisi</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
              <TouchableOpacity>
                <Text>Tükenmişlik Sendromu Psikoterapisi</Text>
              </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 30,
              }}>
              <View style={styles.kutu}>
              <TouchableOpacity>
                 <Text>Panik Atak / Anksiyete Psikoterapisi</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
              <TouchableOpacity>
                <Text>Depresyon Psikoterapisi</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
              <TouchableOpacity>
                 <Text>Özgüven Eksikliği Psikoterapisi</Text>
              </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 30,
              }}>
              <View style={styles.kutu}>
              <TouchableOpacity>
                <Text>Ölüm ve Kayıp Sonrası Yas Terapisi</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
              <TouchableOpacity>
                 <Text>Sosyal Fobi Psikoterapisi</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
              <TouchableOpacity>
                <Text>
                  Üniversite, Okul, Kurum ve Şirketler İçin Psikolojik
                  Danışmanlık
                </Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
          
        </ScrollView>
      </ImageBackground>
    );
  }
}
AppRegistry.registerComponent('myproject', () => SwiperComponent);
const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 230,
    resizeMode: 'center',
    marginTop: 50,
  },
  kutular: {
    flex: 1,
    marginBottom: 10,
  },
  kutu: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 110,
    height: 110,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  ItemComp: {
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(235, 228, 228, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 30,
  },

  wrapper: {
    flex: 1,
    height: 320,
    marginBottom: 10,
    backgroundColor:'red'
  },

  slide1: {
    flex: 1,
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
