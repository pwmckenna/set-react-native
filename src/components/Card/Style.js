const getCardStyle = (selected) => {
    const color = selected ? 'orange' : 'black';
    return {
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color,
        borderWidth: 4,
        borderRadius: 20
    };
};

const getIconStyle = () => {
    const setCardRatio = 1.6;
    const widthPercentage = 45;
    const heightPercentage = 45 / setCardRatio;
    return {
        width: `${widthPercentage}%`,
        height: `${heightPercentage}%`
    };
};

export default { getCardStyle, getIconStyle };

