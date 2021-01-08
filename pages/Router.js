import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {AppContainer, createAppContainer} from 'react-navigation';
import Login from './Login';
import SingUp from './SingUp';
import TabsNavigator from './TabsNavigator';
import TabsNavigatorDanisman from './TabsNavigatorDanisman';


import ModalSearch from './ModalSearch';
import ModalAppointmentUser from './ModalAppointmentUser';
import ModalAppointmentDanisman from './ModalAppointmentDanisman';
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

const MainStack = createStackNavigator(
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

const ModalStack = createStackNavigator(
  {
    Main: MainStack,
    ModalScreenSearch: ModalSearch,
    ModalAppointmentUser: ModalAppointmentUser,
    ModalAppointmentDanisman: ModalAppointmentDanisman,

  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
export default createAppContainer(ModalStack);
