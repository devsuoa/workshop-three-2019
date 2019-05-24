import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import { MapScreen } from "./screens/MapScreen/MapScreen";
import { ReviewScreen } from "./screens/ReviewScreen/ReviewScreen";
import { SwipeScreen } from "./screens/SwipeScreen/SwipeScreen"
import { AppProvider } from './AppProvider';



const TabNavigator = createBottomTabNavigator({
  map: MapScreen,
  review: ReviewScreen,
  swipe: SwipeScreen
})

const SwitchNavigator = createSwitchNavigator({
  login: LoginScreen,
  main: TabNavigator
}, {
  initialRouteName: "main"
})

const AppContainer = createAppContainer(SwitchNavigator);



export default class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <AppContainer />
      </AppProvider>
    );
  }
}

