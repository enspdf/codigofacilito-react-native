import React, { Component } from "react";
import { PermissionsAndroid, View } from "react-native";
import Contacts from "react-native-contacts";
import ContactsUI from "../../components/contacts/ContactsUI";

export default class ContactsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasPermission: false,
      contacts: []
    };
  }

  componentDidMount() {
    this.requestPermission();
  }

  requestPermission = async () => {
    try {
      let granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: "Permiso para leer tu libreta de contactos",
          message:
            "Tu cartera de contactos será usada para que puedas enviar invitaciones"
        }
      );

      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({ hasPermission: true });
        this.queryContacts();

        return;
      }

      this.props.navigation.goBack();
    } catch (err) {
      this.props.navigation.goBack();
    }
  };

  queryContacts = (query = "") => {
    Contacts.getContactsMatchingString(query, (err, contactsFromPhone) => {
      if (err) console.log(err);

      let contacts = contactsFromPhone.map(contact => ({
        name: contact.givenName,
        avatar: contact.thumbnailPath,
        id: contact.recordID
      }));

      this.setState({ contacts });
    });
  };

  render() {
    return (
      <ContactsUI
        queryContacts={this.queryContacts}
        contacts={this.state.contacts}
      />
    );
  }
}
