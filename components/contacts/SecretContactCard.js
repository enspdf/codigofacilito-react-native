import React, { Component, Fragment } from "react";
import { View, Image } from "react-native";
import {
  withTheme,
  Card,
  Paragraph,
  Button,
  IconButton
} from "react-native-paper";
import styles from "../../stylesheets/base.stylesheet";

class SecretContactCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleFriend: false
    };
  }

  showFriend = () => {
    this.setState({ visibleFriend: true });

    setTimeout(() => {
      this.setState({ visibleFriend: false });
    }, 5000);
  };

  render() {
    let props = this.props;
    let avatar =
      !props.user.avatar || props.user.avatar.length == 0
        ? require("../../imgs/avatar.png")
        : { uri: props.user.avatar };

    let avatarFriend =
      !props.user.friend.avatar || props.user.friend.avatar.length == 0
        ? require("../../imgs/avatar.png")
        : { uri: props.user.friend.avatar };

    let avatarFriendHidden = this.state.visibleFriend
      ? avatarFriend
      : require("../../imgs/avatar-black.png");

    return (
      <Card style={[styles.card, { marginTop: 20 }]}>
        <View style={[styles.row]}>
          <View>
            <Card.Content style={{ alignItems: "center" }}>
              <Image style={{ width: 70, height: 70 }} source={avatar} />
              <Paragraph>{props.user.name}</Paragraph>
            </Card.Content>
          </View>
          <View style={{ marginRight: 20, marginLeft: 20 }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../imgs/gift.png")}
            />
          </View>
          <View>
            <Card.Content style={{ alignItems: "center" }}>
              <Image
                style={{ width: 70, height: 70 }}
                source={avatarFriendHidden}
              />
              {this.state.visibleFriend ? (
                <Fragment>
                  <Paragraph>{props.user.friend.name}</Paragraph>
                  <Paragraph
                    style={[this.props.theme.fonts.light, { fontSize: 12 }]}
                  >
                    5 segs para verlo
                  </Paragraph>
                </Fragment>
              ) : (
                <IconButton icon="visibility-off" onPress={this.showFriend} />
              )}
            </Card.Content>
          </View>
        </View>

        <Card.Actions
          style={{
            backgroundColor: "#eee",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button onPress={this.showFriend}>Ver amigo secreto</Button>
        </Card.Actions>
      </Card>
    );
  }
}

export default withTheme(SecretContactCard);
