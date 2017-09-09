import React from 'react';
import CardStyles from './Styles';
import { View, Image } from 'react-native';

export default class Card extends React.Component {
    render() {
        return (
            <View style={CardStyles.cardStyle}>
                <Image style={CardStyles.iconStyle} source={require('../../images/cards/blue_open_moon.png')} />
                <Image style={CardStyles.iconStyle} source={require('../../images/cards/blue_open_moon.png')} />
                <Image style={CardStyles.iconStyle} source={require('../../images/cards/blue_open_moon.png')} />
            </View>
        )
    }
}