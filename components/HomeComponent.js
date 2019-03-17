import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { withTheme, FAB } from "react-native-paper";
import baseStyles from "../stylesheets/base.stylesheet";
import Empty from "./utilities/Empty";
import EventCard from "./events/EventCard";

class HomeComponent extends Component {
  componentDidMount() {
    this.props.setNavigationColor(this.props.theme.colors.primary);
  }

  render() {
    return (
      <View style={baseStyles.container}>
        <Text>Bienvenidos</Text>
        <FlatList
          data={this.props.events}
          ListEmptyComponent={Empty}
          style={{
            width: "100%"
          }}
          renderItem={({ item }) => <EventCard openEventScreen={this.props.openEventScreen} key={item.id} event={item} />}
        />
        <FAB
          icon="add"
          color="white"
          style={{
            backgroundColor: this.props.theme.colors.primary,
            ...baseStyles.fab
          }}
          onPress={this.props.goToAddEvent}
        />
      </View>
    );
  }
}

export default withTheme(HomeComponent);
