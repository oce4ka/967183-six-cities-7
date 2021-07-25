import {loadOffers, loadOffersNearby, loadOffersFavorites, loadOffer, loadReviews, setAuthorizationData, logout as closeSession, redirectToRoute, changeOfferIsFavoriteStatus, resetFavorites, setError, resetError as removeError} from './action';
import {APIRoute, AppRoute, ErrorMessages} from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
    .catch((error) => {
      dispatch(loadOffers([]));
      if (error.response.status === 404) {
        return dispatch(setError(ErrorMessages.SERVER_ERROR));
      }
    })
);

export const fetchOffer = (currentOfferId) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFER.replace(': id', currentOfferId))
    .then(({data}) => dispatch(loadOffer(data)))
    .catch((error) => {
      dispatch(loadOffer({}));
      if (error.response.status === 404) {
        return dispatch(redirectToRoute(AppRoute.PAGE404));
      }
    })
);

export const fetchOffersNearby = (currentOfferId) => (dispatch, _getState, api) => (
  api.get(APIRoute.NEARBY.replace(': hotel_id', currentOfferId))
    .then(({data}) => dispatch(loadOffersNearby(data)))
    .catch((error) => {
      dispatch(loadOffersNearby([]));
      if (error.response.status === 404) {
        return dispatch(setError(ErrorMessages.NEARBY_ERROR));
      }
    })
);

export const fetchOffersFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(loadOffersFavorites(data)))
    .catch((error) => {
      if (error.response.status === 401) {
        return dispatch(setError(ErrorMessages.AUTH_REQUIRED));
      }
      if (error.response.status === 404) {
        return dispatch(setError(ErrorMessages.SERVER_ERROR));
      }
    })
);

export const setOfferFavoritesStatus = (currentOfferId, status) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITES_ADD.replace(': hotel_id', currentOfferId).replace(': status', status))
    .then((data) => dispatch(changeOfferIsFavoriteStatus(data.data)))
    .catch((error) => {
      if (error.response.status === 401) {
        return dispatch(setError(ErrorMessages.AUTH_REQUIRED));
      }
      if (error.response.status === 404) {
        return dispatch(setError(ErrorMessages.SERVER_ERROR));
      }
    })
);

export const fetchReviews = (currentOfferId) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEWS.replace(': hotel_id', currentOfferId))
    .then(({data}) => dispatch(loadReviews(data)))
    .catch((error) => {
      if (error.response.status === 400) {
        return dispatch(setError(ErrorMessages.BAD_REQUEST));
      }
      if (error.response.status === 404) {
        return dispatch(setError(ErrorMessages.SERVER_ERROR));
      }
    })
);

export const addReview = (currentOfferId, review) => (dispatch, _getState, api) => (
  api.post(APIRoute.REVIEWS.replace(': hotel_id', currentOfferId), review)
    .then(({data}) => dispatch(loadReviews(data)))
    .catch((error) => {
      if (error.response.status === 400) {
        return dispatch(setError(ErrorMessages.BAD_REQUEST));
      }
      if (error.response.status === 401) {
        return dispatch(setError(ErrorMessages.AUTH_REQUIRED));
      }
      if (error.response.status === 404) {
        return dispatch(setError(ErrorMessages.SERVER_ERROR));
      }
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
      if (error.response.status === 400) {
        return dispatch(setError(ErrorMessages.AUTH_ERROR));
      }
      if (error.response.status === 401) {
        return dispatch(setError(ErrorMessages.AUTH_ERROR));
      }
      if (error.response.status === 404) {
        return dispatch(setError(ErrorMessages.SERVER_ERROR));
      }
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setAuthorizationData(data)))
    .catch((error) => {
      dispatch(closeSession()); // if old token is in local storage
      dispatch(resetFavorites());

      if (error.response.status === 401) {
        dispatch(setError(ErrorMessages.AUTH_ERROR));
        return dispatch(redirectToRoute(AppRoute.LOGIN));
      }
      if (error.response.status === 404) {
        return dispatch(setError(ErrorMessages.SERVER_ERROR));
      }
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
    .then(() => dispatch(resetFavorites()))
    .catch((error) => {
      if (error.response.status === 404) {
        return dispatch(setError(ErrorMessages.SERVER_ERROR));
      }
    })
);

export const resetError = () => (dispatch, _getState, api) => (dispatch(removeError()));

