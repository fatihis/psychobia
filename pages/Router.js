import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {AppContainer, createAppContainer} from 'react-navigation';
import Login from './Login';
import SingUp from './SingUp';
import MainPage from './MainPage';
import TabsNavigator from './TabsNavigator';
import TabsNavigatorDanisman from './TabsNavigatorDanisman';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, CheckBox} from 'react-native-elements';
import {fromLeft} from 'react-navigation-transitions';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//
class LoginNavigator extends Component {
  render() {
    return <Login navigation={this.props.navigation}></Login>;
  }
}

/*Welcomer: {
  screen: (props) => <Welcomer {...props} />,
  navigationOptions: {
    headerShown: false,},
  },*/

const AppNavigatorr = createStackNavigator(
  {
    SignUp: {
      screen: SingUp,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    AppNavigator: TabsNavigator,
    AppNavigatorD: TabsNavigatorDanisman,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNavigatorr);
