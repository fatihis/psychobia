import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MainPage from './MainPage';
import Search from './Search';
import Appointment from './Appointment';
import AppointmentData from './AppointmentData';
import Profile from './Profile';
import {createStackNavigator} from 'react-navigation-stack';
import {AppContainer, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from 'react-navigation-tabs';
class MainPageNavigator extends Component {
  render() {
    return <MainPage navigation={this.props.navigation}></MainPage>;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Anasayfa: {
      screen: MainPageNavigator,
      navigationOptions: {
        headerShown: false,
        tabBarLabel: 'Anasayfa',
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        headerShown: false,
        tabBarLabel: 'Danışman Ara',
      },
    },
    Appointment: {
      screen: Appointment,
      navigationOptions: {
        headerShown: false,
        tabBarLabel: 'Görüşmelerim',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerShown: false,
        tabBarLabel: 'Profilim',
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

export default createAppContainer(TabNavigator);
