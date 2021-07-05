/* eslint-disable no-console */
import {ActionCreator} from './action';
import {APIRoute} from '../const';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchOfferListNearby = (currentOfferId) => (dispatch, _getState, api) => (
  api.get(APIRoute.NEARBY.replace(': hotel_id', currentOfferId))
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data)))
);

export const fetchOffer = (currentOfferId) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFER.replace(': id', currentOfferId))
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
    .catch(() => {
      window.location.href = '/404'; // Todo: to find more beutiful way
    })
);

export const fetchReviews = (currentOfferId) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEWS.replace(': hotel_id', currentOfferId))
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setAuthorizationData(data)))
    .catch(() => {
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setAuthorizationData(data));
      localStorage.setItem('token', data.token);
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

