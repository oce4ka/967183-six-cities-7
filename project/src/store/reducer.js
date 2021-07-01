/* eslint-disable no-console */
import {ActionType} from './action';
import {Settings, AuthorizationStatus} from '../const';

const initialState = {
  city: Settings.DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
  offer: {},
  isOfferLoaded: false,
  offersNearby: [],
  isOffersNearbyLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.city,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_AUTHORIZATION_DATA:
      return {
        ...state,
        authInfo: action.payload,
        authorizationStatus: AuthorizationStatus.AUTH,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      };
    default:
      return state;
  }
};

export {reducer};

/*
 offers: offers.filter((offer) => (offer.city.name === Settings.DEFAULT_CITY)),
        offers: offers.filter((offer) => (offer.city.name === state.city)),
 */
