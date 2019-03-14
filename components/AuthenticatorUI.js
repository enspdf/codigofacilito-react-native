import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { TextInput, Button, Title, withTheme } from "react-native-paper";
import styles from "../stylesheets/login.stylesheet";

class AuthenticatorUI extends Component {
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

  render() {
    let props = this.props;
    return (
      <View style={styles.container}>
        <Title style={styles.title}>Ingresar a tu cuenta.</Title>
        <TextInput
          style={styles.formControl}
          label="Correo electrónico"
          value={this.state.email}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={text => this.setEmail(text)}
        />

        <TextInput
          style={styles.formControl}
          label="Contraseña"
          value={this.state.password}
          textContentType="password"
          secureTextEntry={true}
          onChangeText={text => this.setPassword(text)}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            ...styles.formControl
          }}
        >
          <TouchableHighlight>
            <Button
              onPress={() =>
                props.mainAction({
                  email: this.state.email,
                  password: this.state.password
                })
              }
              mode="contained"
            >
              {props.mainButtonTitle}
            </Button>
          </TouchableHighlight>
          <TouchableHighlight>
            <Button onPress={() => props.navigationAction()}>
              {props.secondaryButtonTitle}
            </Button>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default withTheme(AuthenticatorUI);
