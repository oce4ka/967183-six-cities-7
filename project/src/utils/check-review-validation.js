import {MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH} from '../const';

const checkReviewValidation = (review) => {
  const charsCount = review.charsCount;
  if (charsCount >= MIN_REVIEW_LENGTH && charsCount <= MAX_REVIEW_LENGTH) {
    return true;
  } else {
    return false;
  }
};

export default checkReviewValidation;
