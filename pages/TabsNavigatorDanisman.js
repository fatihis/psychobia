import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MainPage from './MainPage';
import AppointmentDanisman from './AppointmentDanisman';
import ProfileDanisman from './ProfileDanisman';
import {createStackNavigator} from 'react-navigation-stack';
import {AppContainer, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from 'react-navigation-tabs';
class MainPageNavigatorDanisman extends Component {
  render() {
    return <MainPage navigation={this.props.navigation}></MainPage>;
  }
}

const TabNavigatorDanisman = createBottomTabNavigator(
  {
    Anasayfa: {
      screen: MainPageNavigatorDanisman,
      navigationOptions: {
        headerShown: false,
        tabBarLabel: 'Anasayfa',
        tabBarIcon: ({tintColor}) => (
          <Icon size={27} color={tintColor} name="home"></Icon>
        ),
      },
    },
   
    Appointment: {
      screen: AppointmentDanisman,
      navigationOptions: {
        headerShown: false,
        tabBarLabel: 'Görüşmelerim',
        tabBarIcon: ({tintColor}) => (
          <Icon size={27} color={tintColor} name="calendar"></Icon>
        ),
      },
    },
    Profile: {
      screen: ProfileDanisman,
      navigationOptions: {
        headerShown: false,
        tabBarLabel: 'Profilim',
        tabBarIcon: ({tintColor}) => (
          <Icon size={27} color={tintColor} name="id-badge"></Icon>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#070fab',
      style: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        blurRadius: 1,
      },
    },
  },
);

export default createAppContainer(TabNavigatorDanisman);
