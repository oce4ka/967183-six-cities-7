import {ActionType} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  offer: {},
  isOfferLoaded: false,
  offersNearby: [],
  isOffersNearbyLoaded: false,
};

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
        isOffersNearbyLoaded: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferLoaded: true,
      };
    default:
      return state;
  }
};

export {offerData};
