import {ActionType} from './action';
import offers from '../mocks/offers';
import Settings from '../const';
import {AuthorizationStatus} from '../const';

const initialState = {
  city: Settings.DEFAULT_CITY,
  //offers: offers.filter((offer) => (offer.city.name === Settings.DEFAULT_CITY)),
  offers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.city,
      };
    case ActionType.SHOW_OFFERS:
      return {
        ...state,
        offers: offers.filter((offer) => (offer.city.name === state.city)),
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        questions: action.payload,
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
