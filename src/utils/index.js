import PropTypes from 'prop-types';

const cardPropType = PropTypes.shape({
    shape: PropTypes.string,
    color: PropTypes.string,
    fill: PropTypes.string,
    number: PropTypes.string,
    selected: PropTypes.bool
});

export default { cardPropType };
