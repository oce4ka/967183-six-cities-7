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
  LOGOUT: '/logout',
};

/* Todo: camel case or uppercase in constants */

export const Cities = [
  {name: 'Paris', coords: [48.85341, 2.3488], zoom: 10},
  {name: 'Cologne', coords: [50.935173, 6.953101], zoom: 12},
  {name: 'Brussels', coords: [50.85045, 4.34878], zoom: 11},
  {name: 'Amsterdam', coords: [52.38333, 4.9], zoom: 12},
  {name: 'Hamburg', coords: [53.57532, 10.01534], zoom: 12},
  {name: 'Dusseldorf', coords: [51.22172, 6.77616], zoom: 12},
];

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export default Settings;
