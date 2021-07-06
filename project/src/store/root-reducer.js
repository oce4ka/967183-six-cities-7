import {combineReducers} from 'redux';
import {offerData} from './offer-data/offer-data';
import {reviewData} from './review-data/review-data';
import {seekProcess} from './seek-process/seek-process';
import {user} from './user/user';

export const NameSpace = {
  OFFER: 'OFFER',
  REVIEW: 'REVIEW',
  SEEK: 'SEEK',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.OFFER]: offerData,
  [NameSpace.REVIEW]: reviewData,
  [NameSpace.SEEK]: seekProcess,
  [NameSpace.USER]: user,
});
