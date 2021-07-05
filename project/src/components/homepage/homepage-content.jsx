/* eslint-disable no-console */
import React, {useCallback, useEffect, useState} from 'react';
import PlaceCardsList from '../placecard/placecards-list';
import PropTypes from 'prop-types';
import offerProp from './../offer/offer.prop';
import Map from '../placecard/map';
import PlaceCardSortingSelect from './placecard-sorting-select';
import {SortOffersOptions} from '../../const';
import sortOffers from '../../utils/sort-offers';

function HomepageContent(props) {
  const {offersArray, currentCity} = props;
  const [activePlaceId, setActivePlaceId] = useState(0);
  const [activeMarkerId, setActiveMarkerId] = useState(0);
  const [offersArraySorted, setOffersArraySorted] = useState([]);
  const [sortPayload, setSortPayload] = useState(SortOffersOptions.POPULAR);

  useEffect(() => {
    setOffersArraySorted(sortOffers(sortPayload, offersArray));
  }, [offersArray, sortPayload]);

  const showPremium = true;

  const setActivePlace = (offerId) => {
    setActivePlaceId(offerId);
  };

  const setActiveMarker = useCallback((offerId) => setActiveMarkerId(offerId), [setActiveMarkerId]);

  const changeSortPayload = useCallback((payload) => setSortPayload(payload), [setSortPayload]);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersArray.length} places to stay in {currentCity || '6 Cities'}</b>
          <PlaceCardSortingSelect
            sortPayload={sortPayload}
            setSortPayload={changeSortPayload}
          />
          <PlaceCardsList
            className='cities__places-list places__list tabs__content'
            setActivePlace={setActivePlace}
            activeMarkerId={activeMarkerId}
            offersArray={offersArraySorted}
            showPremium={showPremium}
          />
        </section>
        <div className="cities__right-section">
          <Map
            className="cities__map map"
            setActiveMarker={setActiveMarker}
            activePlaceId={activePlaceId}
            offersArray={offersArray}
            currentCity={currentCity}
          />
        </div>
      </div>
    </div>
  );
}

HomepageContent.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
  currentCity: PropTypes.string.isRequired,
};

export default HomepageContent;
