import {createReducer} from '@reduxjs/toolkit';
import {loadOffer, loadOffersNearby, loadOffers} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  offer: {},
  isOfferLoaded: false,
  offersNearby: [],
  isOffersNearbyLoaded: false,
};

const offerData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
      state.isOffersNearbyLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoaded = true;
    });
});

export {offerData};
