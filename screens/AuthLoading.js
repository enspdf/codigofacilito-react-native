import React, { Component } from "react";
import { View } from "react-native";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { login } from "../actions/users";

class AuthLoading extends Component {
  componentDidMount() {
    this.getUser();
  }

  getUser() {
    firebase.auth().onUserChanged(user => {
      this.props.login(user);
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }

  render() {
    return <View />;
  }
}

export default connect(
  () => ({}),
  {
    login
  }
)(AuthLoading);
