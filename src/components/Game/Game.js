import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Style from './Style';
import Card from '../Card/Card';
import { createDeck } from '../../utils';

export default class Game extends React.Component {

    static propTypes = {
        numColumns: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.deck = createDeck();
        this.cardsInPlay = [];
        for (let i = 0; i < props.numColumns * 3; i++) {
            this.cardsInPlay.push(this.deck.pop());
        }
    }

    render() {
        const rows = [];
        const numRows = 3;
        for (let i = 0; i < numRows; i++) {
            const cells = [];
            for (let j = 0; j < this.props.numColumns; j++) {
                const index = (i * this.props.numColumns) + j;
                const cell = (
                    <View key={`cell-${index}`} style={Style.getCellStyle()}>
                        <Card {...this.cardsInPlay[index]} />
                    </View>
                );
                cells.push(cell);
            }
            const row = <View className="row" key={`row-${i}`} style={Style.getRowStyle(this.props.numColumns)}>{cells}</View>;
            rows.push(row);
        }
        return (
            <View style={Style.getContainerStyle(this.props.numColumns)}>
                {rows}
            </View>
        );
    }
}
