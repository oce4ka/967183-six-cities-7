/* Todo: to make refactoring and add AppRoutes */

export const Settings = {
  CITY_PLACES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  DEFAULT_CITY: 'Paris',
  URL_MARKER_DEFAULT: 'img/pin.svg',
  URL_MARKER_CURRENT: 'img/pin-active.svg',
};

export const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
  CITYPLACE: '/:cityplace',
  ROOT: '/',
  PAGE404: '/404',
};

export const APIRoute = {
  OFFERS: '/hotels',
  OFFER: '/hotels/:id',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const Cities = [
  {name: 'Paris', coords: [48.85341, 2.3488], zoom: 13},
  {name: 'Cologne', coords: [50.935173, 6.953101], zoom: 13},
  {name: 'Brussels', coords: [50.85045, 4.34878], zoom: 13},
  {name: 'Amsterdam', coords: [52.38333, 4.9], zoom: 13},
  {name: 'Hamburg', coords: [53.55032, 10.00034], zoom: 13},
  {name: 'Dusseldorf', coords: [51.22172, 6.77616], zoom: 13},
];

export default Settings;
