import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const getContainerStyle = (numColumns) => {
    const widthPercentage = 0.9;
    const setCardRatio = 1.6;
    const numRows = 3;
    return {
        width: width * widthPercentage,
        height: (((width * widthPercentage) / numColumns) * setCardRatio) * numRows
    };
};

const getRowStyle = numColumns => ({
    display: 'flex',
    height: getContainerStyle(numColumns).height / 3,
    flexDirection: 'row'
});

const getCellStyle = () => ({
    flex: 1,
    margin: 10
});

export default {
    getContainerStyle, getRowStyle, getCellStyle
};
