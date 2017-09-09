import { StyleSheet } from 'react-native';

const cardWidth = 200
const widthToHeightRatio = 1.58;

export default StyleSheet.create({
    cardStyle: {
        width: cardWidth,
        height: widthToHeightRatio * cardWidth,
        borderWidth: cardWidth * 0.025,
        borderColor: '#CDCDCD',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: cardWidth * 0.1
    },
    iconStyle: {
        width: cardWidth * 0.40,
        height: cardWidth * 0.40,
        margin: cardWidth * 0.04
    }
});
