import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'seek/changeCity',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  LOAD_OFFERS_FAVORITES: 'data/loadOffersFavorites',
  LOAD_REVIEWS: 'data/loadReviews',
  LOGOUT: 'user/logout',
  SET_AUTHORIZATION_DATA: 'user/setAuthorizationData',
  CHANGE_OFFER_FAVORITES_STATUS: 'data/changeOfferIsFavoriteStatus',
  REDIRECT_TO_ROUTE: 'seek/redirectToRoute',
  RESET_FAVORITES: 'data/resetFavorites',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offers) => ({
  payload: offers,
}));

export const loadOffersFavorites = createAction(ActionType.LOAD_OFFERS_FAVORITES, (offers) => ({
  payload: offers,
}));

export const changeOfferIsFavoriteStatus = createAction(ActionType.CHANGE_OFFER_FAVORITES_STATUS, (offer) => ({
  payload: offer,
}));

export const resetFavorites = createAction(ActionType.RESET_FAVORITES);

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const setAuthorizationData = createAction(ActionType.SET_AUTHORIZATION_DATA, (data) => ({
  payload: data,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

