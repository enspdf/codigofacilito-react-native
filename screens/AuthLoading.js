import React, { Component } from "react";
import { View } from "react-native";
import firebase from "react-native-firebase";

export default class AuthLoading extends Component {
  componentDidMount() {
    this.getUser();
  }

  getUser() {
    firebase.auth().onUserChanged(user => {
      this.props.navigation.navigate(false ? "App" : "Auth");
    });
  }

  render() {
    return <View />;
  }
}
