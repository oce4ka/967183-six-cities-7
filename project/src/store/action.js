/* eslint-disable no-unused-vars */
/* Todo: resolve errors with unused vars? which are needed actually */

const CHANGE_CITY = 'CHANGE_CITY';
const changeCity = () => ({
  type: CHANGE_CITY,
});
const LOAD_OFFERS = 'LOAD_OFFERS';
const loadOffers = () => ({
  type: LOAD_OFFERS,
});
const LOAD_OFFER = 'LOAD_OFFER';
const loadOffer = () => ({
  type: LOAD_OFFER,
});
const LOAD_OFFERS_NEARBY = 'LOAD_OFFERS_NEARBY';
const loadOffersNearby = () => ({
  type: LOAD_OFFERS_NEARBY,
});
const LOAD_REVIEWS = 'LOAD_REVIEWS';
const loadReviews = () => ({
  type: LOAD_REVIEWS,
});
const REQUIRED_AUTHORIZATION = 'REQUIRE_AUTHORIZATION';
const requiredAuthorization = () => ({
  type: REQUIRED_AUTHORIZATION,
});
const SET_AUTHORIZATION_DATA = 'SET_AUTHORIZATION_DATA';
const setAuthorizationData = () => ({
  type: SET_AUTHORIZATION_DATA,
});

export const ActionType = {
  CHANGE_CITY: 'seek/changeCity',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  LOAD_REVIEWS: 'data/loadReviews',
  LOGOUT: 'user/logout',
  SET_AUTHORIZATION_DATA: 'user/setAuthorizationData',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    city,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadOffersNearby: (offers) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setAuthorizationData: (data) => ({
    type: ActionType.SET_AUTHORIZATION_DATA,
    payload: data,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
