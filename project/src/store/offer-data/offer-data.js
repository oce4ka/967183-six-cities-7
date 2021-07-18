/* eslint-disable no-console */
import {createReducer} from '@reduxjs/toolkit';
import {loadOffer, loadOffersNearby, loadOffers, loadOffersFavorites, changeOfferIsFavoriteStatus, resetFavorites} from '../action';
import convertKeysToCamel from '../../utils/convert-keys-to-camel';

const initialState = {
  offers: [],
  isDataLoaded: false,
  offer: {},
  isOfferLoaded: false,
  offersNearby: [],
  isOffersNearbyLoaded: false,
  offersFavorites: [],
  isOffersFavoritesLoaded: false,
};

const offerData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = convertKeysToCamel(action.payload);
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = convertKeysToCamel(action.payload);
      state.isOffersNearbyLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = convertKeysToCamel(action.payload);
      state.isOfferLoaded = true;
    })
    .addCase(loadOffersFavorites, (state, action) => {
      state.offersFavorites = convertKeysToCamel(action.payload);
      state.isOffersFavoritesLoaded = true;
    })
    .addCase(resetFavorites, (state, action) => {
      state.offersFavorites = [];
      state.isOffersFavoritesLoaded = false;
      state.offers.forEach((offer) => offer.isFavorite = false);
    })
    .addCase(changeOfferIsFavoriteStatus, (state, action) => {
      const offerUpdated = convertKeysToCamel(action.payload);

      if (offerUpdated.isFavorite) {
        state.offersFavorites.push(offerUpdated);
      } else {
        state.offersFavorites = state.offersFavorites.filter((offer) => (offer.id !== offerUpdated.id));
      }

      const indexInOffersToUpdate = state.offers.findIndex((offer) => (offer.id === offerUpdated.id));
      state.offers[indexInOffersToUpdate].isFavorite = !state.offers[indexInOffersToUpdate].isFavorite;

      if (state.offer.id === offerUpdated.id) {
        state.offer.isFavorite = !state.offer.isFavorite;
      }
    });
});

export {offerData};
