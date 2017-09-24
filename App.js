import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Game from './src/components/Game/Game';
import { CardPropTypes } from './src/utils';
import tableTexture from './src/images/background.png';

const backgroundImage = {
    // flex: 1,
    // alignSelf: 'stretch',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: null
};

// <Image style={backgroundImage} source={tableTexture}>

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
};

export default () => (
    <View style={containerStyle}>
        <Game numColumns={4} />
    </View>
);

