import React, { Component } from "react";
import AuthenticatorUI from "../components/AuthenticatorUI";
import firebase from "react-native-firebase";

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  setEmail = email => {
    this.setState({
      email
    });
  };

  setPassword = password => {
    this.setState({
      password
    });
  };

  createUser = async () => {
    try {
      let response = firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
      let { user } = response;

      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <AuthenticatorUI
        setPassword={this.setPassword}
        setEmail={this.setEmail}
        mainButtonTitle="Crear Cuenta"
        secondaryButtonTitle="Ya tengo cuenta"
        navigationAction={() => {
          this.props.navigation.navigate("Login");
        }}
        mainAction={this.createUser}
      />
    );
  }
}
