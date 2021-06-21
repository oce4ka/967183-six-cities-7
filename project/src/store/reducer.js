import {ActionType} from './action';
import offers from '../mocks/offers';
import Settings from '../const';

const initialState = {
  city: Settings.DEFAULT_CITY,
  offers: offers.filter((offer) => (offer.city.name === Settings.DEFAULT_CITY)),
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
    default:
      return state;
  }
};

export {reducer};
