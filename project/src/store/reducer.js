import {ActionType} from './action';
import Settings from '../const';

const initialState = {
  city: Settings.DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.city,
        //offers: action.payload.filter((offer) => (offer.city.name === state.city)),
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        //offers: offers.filter((offer) => (offer.city.name === state.city)),
        offers: action.payload,
        isDataLoaded: true,
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
