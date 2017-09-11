import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { CardPropTypes } from '../../utils';
import Styles from './Styles';

/* eslint global-require: */
export default class Card extends React.Component {

    static propTypes = {
        number: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired
    }


    render() {
        const cards = [];
        for (let i = 0; i < this.props.number; i++) {
            const card = <Image key={i} style={Styles.getIconStyle(this.props.width)} source={require('../../images/cards/blue_open_moon.png')} />;
            cards.push(card);
        }
        return (
            <View style={Styles.getCardStyle(this.props.width)}>
                { cards }
            </View>
        );
        // return (
        //     <View style={{ height: 100, width: 100, borderWidth: 2 }} />
        // );
    }
}
