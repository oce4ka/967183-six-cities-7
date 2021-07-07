import {NameSpace} from '../root-reducer';

export const getReviews = (state) => state[NameSpace.REVIEW].reviews;
export const getReviewsLoadedStatus = (state) => state[NameSpace.REVIEW].isReviewsLoaded;
