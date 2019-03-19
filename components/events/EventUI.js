import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";

export default props => {
  return (
    <View>
      <Text>Screen de eventos</Text>
      <Button onPress={() => props.openContactsScreen()}>
        Agregar invitados
      </Button>
    </View>
  );
};
