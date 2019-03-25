import React from "react";
import { View } from "react-native";
import styles from "../../stylesheets/base.stylesheet";
import { FlatList } from "react-native-gesture-handler";
import Empty from "../utilities/Empty";
import ContactCard from "./ContactCard";

export default props => {
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={Empty}
        data={props.contacts}
        renderItem={({ item }) => (
          <ContactCard
            addContactToEvent={props.addContactToEvent}
            user={item}
          />
        )}
      />
    </View>
  );
};
