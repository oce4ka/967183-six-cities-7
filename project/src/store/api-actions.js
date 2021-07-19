/* eslint-disable no-console */
import {loadOffers, loadOffersNearby, loadOffersFavorites, loadOffer, loadReviews, setAuthorizationData, logout as closeSession, redirectToRoute, changeOfferIsFavoriteStatus, resetFavorites} from './action';
import {APIRoute, AppRoute} from '../const';

// todo: В случае недоступности сервера отображается информационное сообщение. Дизайн сообщения остаётся на усмотрение разработчика.

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
    .catch((error) => {
      console.log(error);
    })
);

export const fetchOffersNearby = (currentOfferId) => (dispatch, _getState, api) => (
  api.get(APIRoute.NEARBY.replace(': hotel_id', currentOfferId))
    .then(({data}) => dispatch(loadOffersNearby(data)))
    .catch((error) => {
      dispatch(loadOffersNearby([]));
      console.log(error);
    })
);

export const fetchOffersFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(loadOffersFavorites(data)))
    .catch((error) => {
      console.log(error);
    })
);

export const setOfferFavoritesStatus = (currentOfferId, status) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITES_ADD.replace(': hotel_id', currentOfferId).replace(': status', status))
    .then((data) => dispatch(changeOfferIsFavoriteStatus(data.data)))
    .catch((error) => {
      console.log(error);
    })
);

export const fetchOffer = (currentOfferId) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFER.replace(': id', currentOfferId))
    .then(({data}) => dispatch(loadOffer(data)))
    .catch((error) => {
      dispatch(loadOffer({}));
      console.log(error);
    })
);

export const fetchReviews = (currentOfferId) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEWS.replace(': hotel_id', currentOfferId))
    .then(({data}) => dispatch(loadReviews(data)))
    .catch((error) => {
      dispatch(loadReviews([]));
      console.log(error);
    })
);

export const addReview = (currentOfferId, review) => (dispatch, _getState, api) => (
  api.post(APIRoute.REVIEWS.replace(': hotel_id', currentOfferId), review)
    .then(({data}) => dispatch(loadReviews(data)))
    .catch((error) => {
      console.log(error);
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setAuthorizationData(data)))
    .catch((error) => {
      console.log(error);
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setAuthorizationData(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch((error) => {
      console.log(error);
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
    .then(() => dispatch(resetFavorites()))
    .catch((error) => {
      console.log(error);
    })
);

