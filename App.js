import React from 'react';
import {View} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import {AppRegistry} from 'react-native'
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
  }},
});
const App = createAppContainer(AppNavigator);
export default App;