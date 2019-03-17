import React from "react";
import { withTheme, Card, Title, Paragraph, Button } from "react-native-paper";
import styles from "../../stylesheets/base.stylesheet";

let EventCard = props => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{props.event.title}</Title>
        <Paragraph>{props.event.date}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => {
            props.openEventScreen(props.event.id);
          }}
        >
          Administrar
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default withTheme(EventCard);
