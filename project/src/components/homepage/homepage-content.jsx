/* eslint-disable no-console */
import React from 'react';
import PlaceCardsList from '../placecard/placecards-list';
import PropTypes from 'prop-types';
import offerProp from './../offer/offer.prop';
import Map from '../placecard/map';
import PlaceCardSortingSelect from './placecard-sorting-select';
import useMapInteraction from '../../hooks/use-map-interaction';
import useOffersSorting from '../../hooks/use-offers-sorting';

function HomepageContent(props) {
  const {offersArray, currentCity} = props;
  const [{offersArraySorted, sortingPayload, changeSortingPayload}] = useOffersSorting(offersArray);

  const [{activeMarkerId, setActiveMarker, activePlaceId, setActivePlace}] = useMapInteraction(0,0);

  const showPremium = true;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersArray.length} places to stay in {currentCity || '6 Cities'}</b>
          <PlaceCardSortingSelect
            sortingPayload={sortingPayload}
            setSortingPayload={changeSortingPayload}
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
