import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';

export const getOffers = (state) => state[NameSpace.OFFER].offers;
export const getDataLoadedStatus = (state) => state[NameSpace.OFFER].isDataLoaded;
export const getOffer = (state) => state[NameSpace.OFFER].offer;
export const getOfferLoadedStatus = (state) => state[NameSpace.OFFER].isOfferLoaded;
export const getOffersNearby = (state) => state[NameSpace.OFFER].offersNearby;
export const getOffersNearbyLoadedStatus = (state) => state[NameSpace.OFFER].isOffersNearbyLoaded;

export const getOffersByCity = (currentCity) => createSelector(
  [getOffers],
  (offers) => offers.filter((offer) => (offer.city.name === currentCity)),
);
