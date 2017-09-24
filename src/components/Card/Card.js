import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import Style from './Style';
import CardIcons from './CardIcons';

export default class Card extends React.Component {

    static propTypes = {
        shape: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        fill: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
    }

    cardPressed = () => {
        this.setState({
            selected: !this.state.selected
        });
    }

    render() {
        const imageSource = CardIcons.getImage({
            color: this.props.color,
            shape: this.props.shape,
            fill: this.props.fill
        });
        const icons = [];
        for (let i = 0; i < this.props.number; i++) {
            const icon = (
                <Image
                    key={i}
                    style={Style.getIconStyle()}
                    source={imageSource}
                    onPress={this.cardPressed}
                />
            );
            icons.push(icon);
        }
        return (
            <TouchableWithoutFeedback onPress={this.cardPressed}>
                <View style={Style.getCardStyle(this.state.selected)}>
                    { icons }
                </View>
            </TouchableWithoutFeedback>
        );
    }
}