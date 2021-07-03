import {SortOffersOptions} from '../const';

const sortOffers = (sort, offers) => {
  let offersArraySorted;
  switch (sort) {
    case SortOffersOptions.RATING_DESCENDING:
      offersArraySorted = offers.sort((j, k) => {
        if (j.rating > k.rating) {
          return -1;
        }
        if (j.rating < k.rating) {
          return 1;
        }
        return 0;
      });
      break;
    case SortOffersOptions.PRICE_DESCENDING:
      offersArraySorted = offers.sort((j, k) => {
        if (j.price > k.price) {
          return -1;
        }
        if (j.price < k.price) {
          return 1;
        }
        return 0;
      });
      break;
    case SortOffersOptions.PRICE_ASCENDING:
      offersArraySorted = offers.sort((j, k) => {
        if (j.price < k.price) {
          return -1;
        }
        if (j.price > k.price) {
          return 1;
        }
        return 0;
      });
      break;
    default:
      offersArraySorted = [...offers];
  }
  return offersArraySorted;
};

export default sortOffers;
