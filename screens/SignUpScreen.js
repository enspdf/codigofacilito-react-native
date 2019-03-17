import React, { Component } from "react";
import AuthenticatorUI from "../components/AuthenticatorUI";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { login } from "../actions/users";

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore();
  }

  createUser = async ({ email, password }) => {
    try {
      let response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      let { user } = response;

      await this.db
        .collection("users")
        .doc(user.uid)
        .set({
          email: user.email
        });
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

export default connect(
  state => ({ user: state.user }),
  {
    login: login
  }
)(SignUpScreen);
