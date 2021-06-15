/* Todo: to make refactoring and add APPROUTEs */

export const SETTINGS = {
  CITY_PLACES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  URL_MARKER_DEFAULT: 'img/pin.svg',
  URL_MARKER_CURRENT: 'img/pin-active.svg',
};

export const APPROUTE = {
  LOGIN: '/login',
  LOSE: '/lose',
  RESULT: '/result',
  ROOT: '/',
  DEV_ARTIST: '/dev-artist',
  DEV_GENRE: '/dev-genre',
};

/* Todo: camel case or uppercase in constants */

export const CITIES = [
  {name: 'Cologne', coords: [52.38333, 4.9], zoom: 12},
  {name: 'Brussels', coords: [52.3909553943508, 4.85309666406198], zoom: 11},
  {name: 'Paris', coords: [52.370216, 4.895168], zoom: 10},
  {name: 'Amsterdam', coords: [52.38333, 4.9], zoom: 12},
];

export default SETTINGS;
