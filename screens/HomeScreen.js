import React, { Component } from "react";
import HomeComponent from "../components/HomeComponent";
import { IconButton } from "react-native-paper";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { addEvent, removeEvent } from "../actions/events";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: navigation.getParam("backgroundColor") || "#222"
      },
      headerTitleStyle: {
        color: "white"
      },
      headerRight: (
        <IconButton
          icon="power-settings-new"
          color="white"
          onPress={() => {
            firebase.auth().signOut();
            navigation.navigate("Auth");
          }}
        />
      )
    };
  };

  setNavigationColor = color => {
    this.props.navigation.setParams({
      backgroundColor: color
    });
  };

  componentDidMount() {
    this.db = firebase.firestore();

    this.readMyEvents();
  }

  readMyEvents = async () => {
    let ref = await this.db
      .collection("users")
      .doc(this.props.user.uid)
      .collection("events");

    ref.onSnapshot(querySnapshot => {
      querySnapshot.docChanges.forEach(change => {
        if (change.type == "added") {
          this.props.addEvent({
            ...change.doc.data(),
            id: change.doc.id
          });
        }

        if (change.type == "removed") {
          this.props.removeEvent(change.doc);
        }
      });
    });
  };

  goToAddEvent = () => {
    this.props.navigation.navigate("AddEvent");
  };

  openEventScreen = id => {
    this.props.navigation.navigate("Event", {
      eventId: id
    });
  };

  render() {
    return (
      <HomeComponent
        setNavigationColor={this.setNavigationColor}
        events={this.props.events}
        goToAddEvent={this.goToAddEvent}
        openEventScreen={this.openEventScreen}
      />
    );
  }
}

export default connect(
  state => {
    return { user: state.user, events: state.events };
  },
  {
    addEvent,
    removeEvent
  }
)(HomeScreen);
