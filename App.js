import React from 'react';
import {View} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import {AppRegistry} from 'react-native'
import StartScreen from './screens/StartScreen';
import RetrievingDataScreen from './screens/RetrievingDataScreen';
import ConfirmLocationScreen from './screens/ConfirmLocationScreen'
import NewLocationScreen from './screens/NewLocationScreen'
AppRegistry.registerComponent('RNNavigators', () => Drawer)
const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen , navigationOptions : {
    title: 'Login',
  }},
  Home: { screen: HomeScreen , navigationOptions : {
    title: 'Home',
    headerTitleStyle :{
      textAlign:'center',
      alignSelf: 'center',
     width:'90%'},
  },
  Start: {screen: StartScreen, navigationOptions:{
    title: 'Start measurements',
  }},
  RetrievingData:{screen: RetrievingDataScreen, navigationOptions:{
    title: 'Retrieving data'
  }},
  ConfirmLocation: {screen: ConfirmLocationScreen, navigationOptions:{
    title: 'Confirm location'
  }},
  NewLocation: {screen: NewLocationScreen, navigationOptions:{
    title:"New location added"
  }}
},
});
const App = createAppContainer(AppNavigator);

/*const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    AddMeasure:  AddMeasureScreen,
    defaulta
  },
  {
    initialRouteName: 'Home'
  }
);*/
export default App;