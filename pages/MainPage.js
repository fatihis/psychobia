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
import {Alert} from 'react-native';
import Data from './components/Data';

export default class MainPage extends Component {
  onPress() {
    Alert.alert(
      '  Bireysel Psikoterapi',
      '  Duygusal çatışma ve duygusal gerilimden kaynaklanan kaygı, ruhsal çökkünlük stres gibi ruhsal sıkıntıları azaltarak kişiyi kaygı ve gerginlikten kurtarma, ruhsal uyum yeteneğini arttırma, sosyal ilişkileri olgunlaştırma yeteneği kazandıran tüm teknik yöntem ve uygulamalardır.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress1() {
    Alert.alert(
      '  İlişki Danışmanlığı',
      '  İlişki danışmanlığı, her türden çiftin çatışmaları fark edip çözmesine ve ilişkilerini geliştirmesine yardımcı olur. İlişki danışmanlığı yoluyla, ilişkinizi yeniden inşa etmek ve güçlendirmek veya ayrı yollarınıza gitmek hakkında düşünceli kararlar verebilirsiniz.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress2() {
    Alert.alert(
      '  Aile Danışmanlığı',
      '  Aile danışmanlığı, yasalarla belirlenmiştir ve aile bireylerine verilen hizmet olarak adlandırılır. Aynı çatı altında yaşayan insanların, evlilik, ayrılık ya da boşanma süreçlerinde yaşadıkları kişisel ya da ailesel problemlerin üstesinden gelmelerine yardımcı olunur. Bireylerin kırgınlıkları, diğer aile üyeleriyle yaşadıkları sorunlar ya da yeni yaşama geçmenin zorlukları konusunda destek aldıkları psikoterapi sürecidir.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress3() {
    Alert.alert(
      '  Çocuk ve Ergen Danışmanlığı',
      '  Büyüme ve gelişim insan yaşamının başından sonuna kadar sürekli devam eden bir süreçtir. Yaşamın her dönemi birey için gelişim dönemidir. Gelişim dönemlerine ortaya çıkan dinamik gelişimler bedensel, zihinsel, duygusal ve toplumsal alanlarda kendini göstermektedir. Her yön birbiri ile etkileşim içinde bir bütündür. Bu nedenle çocukların mevcut gelişim dönemlerinde çevreden doğru uyarana maruz kalması psikolojik gelişimi açısından da büyük önem taşımaktadır. Bebeklik döneminden yetişkinliğe kadar çocuğun gelişim özelliklerinin tanınması, gelişim özelliklerine uygun uyarana maruz bırakılması, olumlu ve olumsuz davranışlar karşısında gelişim özelliklerine uygun tepkinin verilmesi gelişim sürecinde büyük rol oynamaktadır.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress4() {
    Alert.alert(
      '  Bağımlılık Psikoterapisi',
      '  Bağımlılık terapisinde temel hedef kişinin bağımlılık yapıcı maddelerden ve davranışlardan kaçınmasını ve bağımlılığından dolayı yaşadığı fiziksel ve sosyal zararlardan kurtulmasını sağlamaktır. Bağımlılık terapisi kişinin problemi ve problemine ilişkin düşünce hatalarının farkına varması ile başlar.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress5() {
    Alert.alert(
      '  Psikolojik Travma Psikoterapisi',
      '  Travma sonrası stres bozukluğu psikoeğitiminin amacı hastaya bu bozukluğun ne olduğu, belirtileri, tedavisi, bu bozuklukla nasıl başa çıkılabileceği hakkında detaylı bilgi verilmesi ve bu süreçlerin nasıl ilerleyeceğinin bilgisinin hasta dışında aileye de aktarılmasıdır. Travma sonrası stres bozukluğunun diğer ruhsal bozukluklar gibi herkeste olabileceği ve tedavisinin mümkün oluşuyla birlikte hastaya bu durumu kabullendirmek ve olumlu sonuçlar almak travma sonrası stres bozukluğu psikoeğitiminin amacıdır.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress6() {
    Alert.alert(
      '  Kaygı Danışmanlığı',
      '  Çevresel değişimlerden kaynaklı ya da bireyin kendi bedenindeki normal ya da çevresindeki değişimleri farklı yorumlaması sonucu hissettiği süreğen panik, endişe, korku hali olarak bilinmektedir. Yaygın kaygı bozukluğu, obsesif kompulsif bozukluk, panik bozukluk, açık alan korkusu, kapalı alan korkusu, yükseklik korkusu en yaygın tipleridir. Seanslarda bişsel davranışçı terapi teknikleri, ev ödevleri, psikoeğitim danışmanlığı uygulanmaktadır. Kaygıyı değerlendirirken her bireyin belirli kaygılar ile korkular yaşadığı ve bu durumların yaşamın devamı için gereklilik olduğu unutulmamalıdır ancak bu kaygılı durum uyaranın varlığına bağlı olmaksızın bireyin düşünce sistemindeki yanlış yorumlamalardan ötürü uzuyor ve bireyi gergin, gerginlikten dolayı bitkin bırakıyorsa ve yaşamın akışını bozuyorsa mutlaka uzman desteği alınmalıdır.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress7() {
    Alert.alert(
      '  Öfke Kontrolü Psikoterapisi',
      '  Öfke kontrol bozukluğunun altında büyük çoğunlukla kişilikle ilintili problemler bulunur; sorunun çözümlenmesi için zaman ve kişilik alanlarında çalışma uzmanlığı bulunan bir psikoterapistten destek alınmalıdır. Uzman desteğiyle birlikte öfke kontrol bozukluğundan kurtulmak mümkündür. Kişi, uzmandan alacağı destekle, kendisinde öfke yaratan durumları nasıl daha iyi ele alabileceğini keşfedebilir, kendisine özel tasarlanan davranış ve düşünce değiştirme yöntemleriyle sorunun üzerine bilinçli bir biçimde gidebilir, bilinçaltı/bilnçdışı çalışmaları ile sorunun kökenlerine dair çalışmalar ve duygulanım regülasyonu düzenleme çalışması sonucunda kendiliğin onarımı gerçekleşir ve bu yolla öfke kontrolü sağlanır.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress8() {
    Alert.alert(
      '  Tükenmişlik Sendromu Psikoterapisi',
      '  Tükenmişlik sendromu yaşayan kişiler kendilerini bazen yardım almak istemeyecek kadar çaresiz ve güçsüz hissedebilirler. Böyle durumlarda, kişinin yakınlarına da önemli sorumluluklar düşer. Yakınların bu süreçteki desteği önemlidir. Tükenmişlik durumu yaşayan birine çok yüklenilmesi sadece yaşadığı bunaltıyı arttırır. Kapsayıcı ve hoşgörülü bir desteğe ihtiyaç vardır. Bu süreçte profesyonel yardım alınması çok önemlidir. Profesyonel yardımdan kasıt psikolojik danışma veya psikoterapi sürecidir. Psikoterapi sürecinde öncelikle iş yaşamından kaynaklanan sorunlar ve bireyin kendisinden kaynaklanan sorunlar ayrıştırılır ve bu konularda kişinin çözümler üretmesine rehberlik edilir. Bu yardım alınırken de bu konuda uzman psikolog veya psikolojik danışmanlar seçilmeli ve zaman kaybetmeden sürece başlanmalıdır.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress9() {
    Alert.alert(
      '  Panik Atak/Anksiyete Psikoterapisi',
      '  Panik atak ve panik bozukluk psikoterapisinde önce kişinin varsa geçmişteki travma ve blokajları çalışılır. Emosyonel duygu düzenleme çalışmalarının ardından benlik değerini ve ego gücünü yükseltme çalışmalarıyla birlikte bireyin kimlikleri, anlamları, değerleri ve düşünce kalıpları üzerinde çalışmalar yapılarak kişinin ele alma, baş edebilme, yönetebilme kapasitelerinin geliştirilebilmesi gibi alanlara odaklanılır. Kişinin bireyselliğini kazanması, zihnen özgürleşmesi ve psikolojik olarak büyümesi sonucunda panik atak rahatsızlığı ortadan kalkar.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress10() {
    Alert.alert(
      '  Depresyon Psikoterapisi',
      '  Depresyon ciddiye alınmadığında ve süre uzadığında bireylerde intihar girişimlerinin ortaya çıkmasına kadar ilerleyebilmektedir. Depresyon danışmanlığı sürecinde, bireyleri hayata geri kazandırmak ve hayattan zevk almalarını sağlamak hedeflenmektedir. Bilişsel davranışçı danışmanlık teknikleri, kısa süreli çözüm odaklı danışmanlık teknikleri, şema terapi teknikleri, varoluşçu teknikler kullanılarak kişinin hayat olaylarını yeniden anlamlandırması ve kontrol edebilme becerilerini kazanması hedeflenmektedir.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress11() {
    Alert.alert(
      '  Özgüven Eksikliği Psikoterapisi',
      '  İnsanların bir konuda gerçek kapasitelerini ortaya koyabilmeleri için bazen zamana, bazen yeterince yetkinlik geliştirmeye, bazen de çevresel değişikliklere ihtiyaçları olabilir. Doğru alanda konulacak gerçekçi, kişisel, sürekliliği olan ve kapsayıcı hedefler, motivasyonu artırmakla birlikte özgüveni de yükseltir. Özgüveni düşük kişiler çoğunlukla kendileriyle ilgili taşıdıkları bu duygu ve düşüncelerin kalıcı olduğu yanılgısına kapılırlar ancak esasında bu kişiler bir uzmandan destek aldıklarında özgüven eksikliği sorununu giderebilirler. Özgüven eksikliğine yönelik terapilerde çözüm dinamikleri geliştirmek üzere çalışmalar uygulanır. Örneğin; eğer kişi “Topluluk önünde konuşamam” diye düşünüyorsa, o düşüncenin yerine “Topluluk önünde konuşmayı öğrenebilirim” ve “Bunun için hitabet ve sunum yeteneğimi geliştirmeye ihtiyacım var, bu yetkinlikleri 6 aylık bir zaman dilimi içerisinde geliştirebilirim..” gibi bir düşünceyi koyabilmek için gerektiğinde bilinçaltına inme yöntemleri de kullanılabilir. Özgüven eksikliğinin terapisinde genel olarak bilişsel davranışçı ve şema terapileri, hipnoz/hipnoanalitik terapiler, psikanalitik ve psikodinamik terapileri uygulanmaktadır.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress12() {
    Alert.alert(
      '  Ölüm ve Kayıp Sonrası Yas Terapisi',
      '  Komplike veya travmatik yas süreci olarak adlandırılan süreç yaşanıyorsa, burada bir uzmanın desteğini almak faydalı olabilir. Kaybedilen kişi ile kaybeden kişi arasında çözüme kavuşamamış sorunların varlığı, ayrılıklar karşısında aşırı zorlanma yaşanan bağımlı ilişkiler vb. durumlarda komplike/travmatik yas ortaya çıkabilir. Devamlı olarak yas hissi yaşayan birey bir taraftan kaybını geriye döndürmek isterken, diğer taraftan yitirdiği ilişkinin daha az zorlayıcı olmasını talep eder. Görüldüğü gibi bu çelişki faktörü kişinin hem kaybettiği kişiyi büyük bir özlemle kurtarma arzusu yaratabilir hem de çözülememiş sorunlar nedeniyle zorlu yaşanmışlıklar kişiden kurtulma içgüdüsünü de açığa çıkarabilir. Bu durum ise kişinin içinden çıkılmaz bir kısırdöngüye girmesine ve kendisiyle ciddi iç çatışmalar yaşamasına neden olabilir. Bu gibi komplike/travmatik yas süreçlerinde bilişsel davranışçı terapinin, bireye büyük yararlar sağlayabileceği göz önünde bulundurulmalıdır.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress13() {
    Alert.alert(
      '  Sosyal Fobi Psikoterapisi',
      '  Kişi her ne kadar bu kaygı bozukluğunu yaşarken içinden çıkamayacakmış gibi hissettiği bir kaygı veya korku yaşasa da, sosyal fobi büyük ölçüde tedavi edilebilir bir kaygı bozukluğudur. Sosyal fobinin incelendiği pek çok araştırma, tedavi sürecinde bilişsel-davranışçı terapinin ciddi oranda fayda sağladığını ortaya koymuştur. Tedavi yöntemleri arasında bilişsel-davranışçı terapinin yanı sıra psikodinamik ve psikoanalitik terapiler, duygu odaklı terapiler, şema terapi, hipnoterapi ve bütüncül psikoterapiler de bulunmaktadır. Uzman tarafından gerek görüldüğü takdirde seansların yanı sıra ilaç tedavisinden de yararlanılabilmektedir.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  }
  onPress14() {
    Alert.alert(
      '  Kurumsal Danışmanlık',
      '  Kurumsal danışmanlık şirketleri ve kurumları kapsayan, kurumsal hedefe ulaşmayı destekleyen profesyonel bir danışmanlık çeşididr. Kurum çalışanlarına yönelik çeşitli konularda gelişimsel ve motivasyonel hizmetler barındırmaktadır. Verilen hizmetin konusuna göre kişi sayısı ve danışmanlık süresi değişebilmektedir.',
      [
        {
          text: 'Kapat',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
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
              }}>
              <View style={styles.slide1}>
                <ImageBackground
                  source={require('./assets/slide1.png')}
                  style={styles.slider}>
                  <Text
                    style={{
                      marginTop: 180,
                      marginLeft: 85,
                      textAlign: 'right',
                      width: 260,
                      fontFamily: 'PTSerif-BoldItalic',
                      fontSize: 14,
                    }}>
                    Dünyanın her yerinden{' '}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'PTSerif-BoldItalic',
                      fontSize: 14,
                      marginRight: 10,
                      textAlign: 'right',
                    }}>
                    istediğiniz psikologla görüşebilirsiniz
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.slide2}>
                <ImageBackground
                  source={require('./assets/slide2.png')}
                  style={styles.slider}>
                  <Text
                    style={{
                      marginTop: 55,
                      marginLeft: 40,
                      width: 150,
                      fontFamily: 'PTSerif-BoldItalic',
                      fontSize: 14,
                    }}>
                    Tek tuşla kolayca randevu alabilirsiniz
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.slide3}>
                <ImageBackground
                  source={require('./assets/slide3.png')}
                  style={styles.slider}>
                  <Text
                    style={{
                      marginTop: 55,
                      marginLeft: 40,
                      width: 120,
                      fontFamily: 'PTSerif-BoldItalic',
                      fontSize: 14,
                    }}>
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
                  <TouchableOpacity onPress={this.onPress}>
                    <Text>Bireysel Psikoterapi</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.kutu}>
                  <TouchableOpacity onPress={this.onPress1}>
                    <Text>İlişki Danışmanlığı</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.kutu}>
                  <TouchableOpacity onPress={this.onPress2}>
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
                  <TouchableOpacity onPress={this.onPress3}>
                    <Text>Çocuk ve Ergen Danışmanlığı</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.kutu}>
                  <TouchableOpacity onPress={this.onPress4}>
                    <Text>Bağımlılık Psikoterapisi</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.kutu}>
                  <TouchableOpacity onPress={this.onPress5}>
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
                  <TouchableOpacity onPress={this.onPress6}>
                    <Text>Kaygı Danışmanlığı</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.kutu}>
                  <TouchableOpacity onPress={this.onPress7}>
                    <Text>Öfke Kontrolü Psikoterapisi</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.kutu}>
                  <TouchableOpacity onPress={this.onPress8}>
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
                  <TouchableOpacity onPress={this.onPress9}>
                    <Text>Panik Atak / Anksiyete Psikoterapisi</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.kutu}>
                  <TouchableOpacity onPress={this.onPress10}>
                    <Text>Depresyon Psikoterapisi</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.kutu}>
                  <TouchableOpacity onPress={this.onPress11}>
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
                  <TouchableOpacity onPress={this.onPress12}>
                    <Text>Ölüm ve Kayıp Sonrası Yas Terapisi</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.kutu}>
                  <TouchableOpacity onPress={this.onPress13}>
                    <Text>Sosyal Fobi Psikoterapisi</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.kutu}>
                  <TouchableOpacity onPress={this.onPress14}>
                    <Text>Kurumsal Danışmanlık</Text>
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
