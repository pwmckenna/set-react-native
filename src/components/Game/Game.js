import React from 'react';
import { View, Dimensions } from 'react-native';
import Card from '../Card/Card';

const percentageWidth = 0.8;

const { width } = Dimensions.get('window');

const containerStyle = {
    width: width * percentageWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
};

export default class Game extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <View style={containerStyle}>
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
                <Card number={2} width={containerStyle.width / 4} />
            </View>
        );
    }
}
