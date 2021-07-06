import {ActionType} from '../action';

const initialState = {
  reviews: [],
  isReviewsLoaded: false,
};

const reviewData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true,
      };
    default:
      return state;
  }
};

export {reviewData};
