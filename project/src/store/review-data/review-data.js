import {createReducer} from '@reduxjs/toolkit';
import {loadReviews} from '../action';
import convertKeysToCamel from '../../utils/convert-keys-to-camel';

const initialState = {
  reviews: [],
  isReviewsLoaded: false,
};

const reviewData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.reviews = convertKeysToCamel(action.payload);
      state.isReviewsLoaded = true;
    });
});

export {reviewData};
