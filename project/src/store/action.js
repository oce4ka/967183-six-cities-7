export const ActionType = {
  CHANGE_CITY: 'seek/changeCity',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  LOAD_REVIEWS: 'data/loadReviews',
  LOGOUT: 'user/logout',
  SET_AUTHORIZATION_DATA: 'user/setAuthorizationData',
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  city,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

export const loadOffersNearby = (offers) => ({
  type: ActionType.LOAD_OFFERS_NEARBY,
  payload: offers,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setAuthorizationData = (data) => ({
  type: ActionType.SET_AUTHORIZATION_DATA,
  payload: data,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

