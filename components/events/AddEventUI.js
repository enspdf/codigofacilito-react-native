import React, { Component } from "react";
import { View } from "react-native";
import { Title, TextInput, Button, withTheme } from "react-native-paper";

class AddEventUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: new Date().toJSON()
    };
  }

  submit = () => {
    this.props.add(this.state);
  };

  render() {
    return (
      <View>
        <Title>Organiza un intercambio.</Title>
        <TextInput
          label="Titulo Ejemplo"
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
        />
        <View>
          <Button
            mode="contained"
            color={this.props.theme.colors.accent}
            onPress={this.submit}
          >
            Crear evento
          </Button>
        </View>
      </View>
    );
  }
}

export default withTheme(AddEventUI);
