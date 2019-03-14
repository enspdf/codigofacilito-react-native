import React, { Component } from "react";
import AuthenticatorUI from "../components/AuthenticatorUI";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { login } from "../actions/users";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.login({ name });
  }

  componentDidUpdate() {
    console.log(this.props.user);
  }

  login = async ({ email, password }) => {
    try {
      let response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      let { user } = response;

      this.props.login(user);
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
        mainButtonTitle="Ingresar"
        secondaryButtonTitle="No tengo cuenta"
        navigationAction={() => {
          this.props.navigation.navigate("SignUp");
        }}
        mainAction={this.login}
      />
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  {
    login: login
  }
)(LoginScreen);
