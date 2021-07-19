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
  OFFER: '/hotels/: id',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY: '/hotels/: hotel_id/nearby',
  REVIEWS: '/comments/: hotel_id',
  FAVORITES: '/favorite',
  FAVORITES_ADD: '/favorite/: hotel_id/: status',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const TypesOfProperty = {
  'apartment': 'Apartment',
  'room': 'Private Room',
  'house': 'House',
  'hotel': 'Hotel',
};

export const MAX_IMAGE_COUNT = 6;
export const MAX_REVIEWS = 10;
export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;

export const SortOffersOptions = {
  PRICE_DESCENDING: 'Price: high to low',
  PRICE_ASCENDING: 'Price: low to high',
  RATING_DESCENDING: 'Top rated first',
  POPULAR: 'Popular',
};

export const Cities = [
  {name: 'Paris', coords: [48.85341, 2.3488], zoom: 13},
  {name: 'Cologne', coords: [50.935173, 6.953101], zoom: 13},
  {name: 'Brussels', coords: [50.85045, 4.34878], zoom: 13},
  {name: 'Amsterdam', coords: [52.38333, 4.9], zoom: 13},
  {name: 'Hamburg', coords: [53.55032, 10.00034], zoom: 13},
  {name: 'Dusseldorf', coords: [51.22172, 6.77616], zoom: 13},
];

export const ErrorMessages = {
  SERVER_ERROR: 'Damn gerbils have stopped running again! Someone has been dispatched to poke them with a sharp stick.',

};

export default Settings;
