import React, { Component } from 'react';
import { Alert, AppRegistry, Text, TextInput, View, Button } from 'react-native';
import Game from './src/components/Game/Game';
import { CardPropTypes } from './src/utils';

const style = {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
};

export default class App extends Component {
    render() {
        return (
            <View style={style}>
                <Game />
            </View>
        )
    }
}
