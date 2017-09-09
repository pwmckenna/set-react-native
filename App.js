import React, { Component } from 'react';
import { Alert, AppRegistry, Text, TextInput, View, Button } from 'react-native';
import Game from './src/components/Game/Game';

export default class App extends Component {

  render() {
    return (
        <Game />
    );
  }
}
