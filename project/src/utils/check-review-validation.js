import {Settings} from '../const';

const checkReviewValidation = (review) => {
  const charsCount = review.charsCount;
  if (charsCount >= Settings.MIN_REVIEW_LENGTH && charsCount <= Settings.MAX_REVIEW_LENGTH) {
    return true;
  } else {
    return false;
  }
};

export default checkReviewValidation;
