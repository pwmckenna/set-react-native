import blueOpenMoon from '../../images/cards/blue_open_moon.png';
import blueOpenPlanet from '../../images/cards/blue_open_planet.png';
import blueOpenStar from '../../images/cards/blue_open_star.png';
import blueSolidMoon from '../../images/cards/blue_solid_moon.png';
import blueSolidPlanet from '../../images/cards/blue_solid_planet.png';
import blueSolidStar from '../../images/cards/blue_solid_star.png';
import blueStripedMoon from '../../images/cards/blue_striped_moon.png';
import blueStripedPlanet from '../../images/cards/blue_striped_planet.png';
import blueStripedStar from '../../images/cards/blue_striped_star.png';
import purpleOpenMoon from '../../images/cards/purple_open_moon.png';
import purpleOpenPlanet from '../../images/cards/purple_open_planet.png';
import purpleOpenStar from '../../images/cards/purple_open_star.png';
import purpleSolidMoon from '../../images/cards/purple_solid_moon.png';
import purpleSolidPlanet from '../../images/cards/purple_solid_planet.png';
import purpleSolidStar from '../../images/cards/purple_solid_star.png';
import purpleStripedMoon from '../../images/cards/purple_striped_moon.png';
import purpleStripedPlanet from '../../images/cards/purple_striped_planet.png';
import purpleStripedStar from '../../images/cards/purple_striped_star.png';
import yellowOpenMoon from '../../images/cards/yellow_open_moon.png';
import yellowOpenPlanet from '../../images/cards/yellow_open_planet.png';
import yellowOpenStar from '../../images/cards/yellow_open_star.png';
import yellowSolidMoon from '../../images/cards/yellow_solid_moon.png';
import yellowSolidPlanet from '../../images/cards/yellow_solid_planet.png';
import yellowSolidStar from '../../images/cards/yellow_solid_star.png';
import yellowStripedMoon from '../../images/cards/yellow_striped_moon.png';
import yellowStripedPlanet from '../../images/cards/yellow_striped_planet.png';
import yellowStripedStar from '../../images/cards/yellow_striped_star.png';

const images = {
    blueOpenMoon,
    blueOpenPlanet,
    blueOpenStar,
    blueSolidMoon,
    blueSolidPlanet,
    blueSolidStar,
    blueStripedMoon,
    blueStripedPlanet,
    blueStripedStar,
    purpleOpenMoon,
    purpleOpenPlanet,
    purpleOpenStar,
    purpleSolidMoon,
    purpleSolidPlanet,
    purpleSolidStar,
    purpleStripedMoon,
    purpleStripedPlanet,
    purpleStripedStar,
    yellowOpenMoon,
    yellowOpenPlanet,
    yellowOpenStar,
    yellowSolidMoon,
    yellowSolidPlanet,
    yellowSolidStar,
    yellowStripedMoon,
    yellowStripedPlanet,
    yellowStripedStar
};

const getImage = (card) => {
    const upperCaseFirst = word => word.charAt(0).toUpperCase() + word.substring(1);
    return images[`${card.color}${upperCaseFirst(card.fill)}${upperCaseFirst(card.shape)}`];
};

export default { getImage };
