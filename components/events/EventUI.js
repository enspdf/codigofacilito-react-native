import React from "react";
import { View, FlatList } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import ContactCard from "../contacts/ContactCard";

export default props => {
  return (
    <View>
      <Title>{props.event.title}</Title>
      <Paragraph>{new Date(props.event.date).toLocaleDateString()}</Paragraph>
      <View>
        <Button
          mode="contained"
          disabled={props.contacts.length < 3}
          onPress={props.shuffleUsers}
        >
          Generar parejas
        </Button>
      </View>
      <FlatList
        data={props.contacts}
        renderItem={({ item }) => <ContactCard user={item} />}
      />
      <Button onPress={() => props.openContactsScreen()}>
        Agregar invitados
      </Button>
    </View>
  );
};
