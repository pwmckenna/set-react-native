const getCardStyle = (cardWidth) => {
    const widthToHeightRatio = 1.58;
    const padding = cardWidth * 0.1;
    const actualCardWidth = cardWidth - (padding * 1.5);
    return {
        backgroundColor: 'white',
        width: actualCardWidth,
        height: actualCardWidth * widthToHeightRatio,
        borderWidth: actualCardWidth * 0.025,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: actualCardWidth * 0.1,
        marginTop: actualCardWidth * 0.25
    };
};

const getIconStyle = cardWidth => ({
    width: cardWidth * 0.40,
    height: cardWidth * 0.40,
    margin: cardWidth * 0.04
});

export default { getCardStyle, getIconStyle };

