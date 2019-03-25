import React, { Component } from "react";
import { View } from "react-native";
import styles from "../../stylesheets/base.stylesheet";
import { FlatList } from "react-native-gesture-handler";
import Empty from "../utilities/Empty";
import ContactCard from "./ContactCard";
import { TextInput } from "react-native-paper";

export default class ContactsUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  updateQuery = text => {
    this.setState({ query: text });
    this.props.queryContacts(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label="Buscar un contacto..."
          value={this.state.query}
          onChangeText={this.updateQuery}
        />
        <FlatList
          ListEmptyComponent={Empty}
          data={this.props.contacts}
          renderItem={({ item }) => (
            <ContactCard
              addContactToEvent={this.props.addContactToEvent}
              user={item}
            />
          )}
        />
      </View>
    );
  }
}
