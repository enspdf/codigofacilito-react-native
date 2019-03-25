import React, { Component } from "react";
import EventUI from "../../components/events/EventUI";

export default class EventScreen extends Component {
  componentDidMount() {
    this.eventId = this.props.navigation.getParam("eventId");
  }

  openContactsScreen = () => {
    this.props.navigation.navigate("ContactsScreen", {
      eventId: this.eventId
    });
  };

  render() {
    return <EventUI openContactsScreen={() => this.openContactsScreen()} />;
  }
}
