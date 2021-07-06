import {useCallback, useEffect, useState} from 'react';
import {SortOffersOptions} from '../const';
import sortOffers from '../utils/sort-offers';

const useOffersSorting = (offersArray) => {
  const [offersArraySorted, setOffersArraySorted] = useState([]);
  const [sortingPayload, setSortingPayload] = useState(SortOffersOptions.POPULAR);
  useEffect(() => {
    setOffersArraySorted(sortOffers(sortingPayload, offersArray));
  }, [offersArray, sortingPayload]);
  const changeSortingPayload = useCallback((payload) => setSortingPayload(payload), [setSortingPayload]);
  return [{offersArraySorted, sortingPayload, changeSortingPayload}];
};

export default useOffersSorting;
