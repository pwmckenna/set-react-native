import React from 'react';
import { View } from 'react-native';
import Card from '../Card/Card';


export default class Game extends React.Component {
    render() {
        return (
            <View style={containerStyle}>
                <Card />
            </View>
        )
    }
}

const containerStyle = {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}