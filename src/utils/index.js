import PropTypes from 'prop-types';
import { shuffle } from 'lodash';


const cardPropType = PropTypes.shape({
    shape: PropTypes.string,
    color: PropTypes.string,
    fill: PropTypes.string,
    number: PropTypes.string,
    selected: PropTypes.bool
});

const cardAttr = {
    shape: ['moon', 'planet', 'star'],
    color: ['blue', 'purple', 'yellow'],
    fill: ['open', 'solid', 'striped'],
    number: ['1', '2', '3']
};

const createDeck = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    const shape = cardAttr.shape[i];
                    const color = cardAttr.color[j];
                    const fill = cardAttr.fill[k];
                    const number = cardAttr.number[l];
                    const card = { shape, color, fill, number };
                    cards.push(card);
                }
            }
        }
    }
    return shuffle(cards);
};

export { cardPropType, createDeck };
