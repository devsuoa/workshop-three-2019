import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { MapScreen } from "./screens/MapScreen/MapScreen";
import { ReviewScreen } from "./screens/ReviewScreen/ReviewScreen";
import { SwipeScreen } from "./screens/SwipeScreen/SwipeScreen"

const TabNavigator = createBottomTabNavigator({
  map: MapScreen,
  review: ReviewScreen,
  swipe: SwipeScreen
})

const AppContainer = createAppContainer(TabNavigator);



export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

