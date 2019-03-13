import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { TextInput, Button, Title, withTheme } from "react-native-paper";
import styles from "../stylesheets/login.stylesheet";

let AuthenticatorUI = props => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Ingresar a tu cuenta.</Title>
      <TextInput
        style={styles.formControl}
        label="Correo electrónico"
        onChangeText={text => props.setEmail(text)}
      />

      <TextInput
        style={styles.formControl}
        label="Contraseña"
        onChangeText={text => props.setPassword(text)}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          ...styles.formControl
        }}
      >
        <TouchableHighlight>
          <Button onPress={() => props.mainAction()} mode="contained">
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
};

export default withTheme(AuthenticatorUI);
