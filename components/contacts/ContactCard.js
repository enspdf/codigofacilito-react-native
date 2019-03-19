import React from "react";
import { Image, View } from "react-native";
import { Card, Title } from "react-native-paper";
import styles from "../../stylesheets/base.stylesheet";

export default props => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Image source={{ uri: props.user.avatar }} />
        <View>
          <Title>{props.user.name}</Title>
        </View>
      </Card.Content>
    </Card>
  );
};