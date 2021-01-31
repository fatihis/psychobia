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
import { Alert } from 'react-native'
import Data from './components/Data';

export default class MainPage extends Component {
  onPress(){
    Alert.alert(
      '  Bireysel Psikoterapi', 
      '  Duygusal çatışma ve duygusal gerilimden kaynaklanan kaygı, ruhsal çökkünlük stres gibi ruhsal sıkıntıları azaltarak kişiyi kaygı ve gerginlikten kurtarma, ruhsal uyum yeteneğini arttırma, sosyal ilişkileri olgunlaştırma yeteneği kazandıran tüm teknik yöntem ve uygulamalardır.' , 
      [  
        {  
            text: 'Kapat',  
            onPress: () => console.log('Cancel Pressed'),  
            style: 'cancel',  
        }
      ]  
      );
  }
  onPress1(){
    Alert.alert(
      'Aile ve Çift Terapisi', 
      'Mesaj İçeriği',
      [  
        {  
            text: 'Kapat',  
            onPress: () => console.log('Cancel Pressed'),  
            style: 'cancel',  
        }
      ]  
    );
   }
   onPress2(){
    alert('Bilgilendirme2');
   }
   onPress3(){
    Alert.alert(
      '  İlişki Danışmanlığı',
      '  İlişki danışmanlığı, her türden çiftin çatışmaları fark edip çözmesine ve ilişkilerini geliştirmesine yardımcı olur. İlişki danışmanlığı yoluyla, ilişkinizi yeniden inşa etmek ve güçlendirmek veya ayrı yollarınıza gitmek hakkında düşünceli kararlar verebilirsiniz.'
    
      );
    }
    onPress4() {  
      Alert.alert(  
          'Alert Title',  
          'My Alert Mssdfsgeg',  
          [  
              {  
                  text: 'Kapat',  
                  onPress: () => console.log('Cancel Pressed'),  
                  style: 'cancel',  
              }
              
          ]  
      );  
  }  
   onPress5(){
    alert('Bilgilendirme5');
   }
   onPress6(){
    alert('Bilgilendirme6');
   }

  render() {
    return (

      <ImageBackground
        source={require('./assets/mainbg.jpg')}
        style={styles.bgimage}>
                <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            showsPagination={false}
            autoplay={true}
            buttonWrapperStyle={{
              alignItems: 'flex-start',
              marginTop: 130,
              color: '#ffffff',
            }}
            >
           <View style={styles.slide1}>
              <ImageBackground
                source={require('./assets/pexels-artem-podrez-4492189.png')}
                style={styles.slider}>
                <Text
                  style={{
                    marginTop: 180,
                    marginLeft: 85,
                    textAlign: 'right',
                    width: 260,
                    fontFamily: 'PTSerif-BoldItalic',
                    fontSize: 14
                  }}>
                  Dünyanın her yerinden </Text> 
                  <Text style={{
                    fontFamily: 'PTSerif-BoldItalic',
                    fontSize: 14,
                    marginRight: 10,
                    textAlign: 'right',}}
                  >istediğiniz psikologla görüşebilirsiniz
                  </Text>
                
              </ImageBackground>
            </View>
            <View style={styles.slide2}>
              <ImageBackground
                source={require('./assets/pexels-ketut-subiyanto-4474047.png')}
                style={styles.slider}>
                <Text style={{
                  marginTop: 55, 
                  marginLeft: 40, 
                  width: 150,
                  fontFamily: 'PTSerif-BoldItalic',
                  fontSize: 14}}>
                  Tek tuşla kolayca randevu alabilirsiniz
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.slide3}>
              <ImageBackground
                source={require('./assets/pexels-karolina-grabowska-4491440.png')}
                style={styles.slider}>
                <Text style={{
                   marginTop: 55,
                   marginLeft: 40, 
                   width: 120,
                   fontFamily: 'PTSerif-BoldItalic',
                   fontSize: 14}}>
                  Sizin için en uygun psikoloğu seçebilirsiniz
                </Text>
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
                <TouchableOpacity
                onPress={this.onPress1}>
                  <Text>Aile ve Çift Terapisi</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
                 <TouchableOpacity
                 onPress={this.onPress2}>
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
              <TouchableOpacity
              onPress={this.onPress3}>
                 <Text>İlişki Danışmanlığı</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
              <TouchableOpacity
              onPress={this.onPress4}>
                <Text>Bağımlılık Psikoterapisi</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.kutu}>
              <TouchableOpacity
              onPress={this.onPress5}>
                  <Text >Psikolojik Travma Psikoterapisi</Text>
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
              <TouchableOpacity
              onPress={this.onPress6}>
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
        </SafeAreaView>
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
    height: 320,
    marginBottom: 10,
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
