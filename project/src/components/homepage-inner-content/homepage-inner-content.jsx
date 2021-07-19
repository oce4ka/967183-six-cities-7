import React from 'react';
import PlacecardList from '../placecard-list/placecard-list';
import PropTypes from 'prop-types';
import offerProp from '../offer-screen/offer.prop';
import Map from '../map/map';
import PlacecardSortingSelect from '../placecard-sorting-select/placecard-sorting-select';
import useMapInteraction from '../../hooks/use-map-interaction';
import useOffersSorting from '../../hooks/use-offers-sorting';
import useScrollToTop from '../../hooks/use-scroll-to-top';

function HomepageInnerContent(props) {
  const {offersArray, currentCity} = props;
  const [{activeMarkerId, setActiveMarker, activePlaceId, setActivePlace}] = useMapInteraction(0, 0);
  const [{offersArraySorted, sortingPayload, changeSortingPayload}] = useOffersSorting(offersArray);
  const elementToScrollRef = useScrollToTop(currentCity);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section ref={elementToScrollRef} className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersArray.length} places to stay in {currentCity || '6 Cities'}</b>
          <PlacecardSortingSelect
            sortingPayload={sortingPayload}
            setSortingPayload={changeSortingPayload}
          />
          <PlacecardList
            className='cities__places-list places__list tabs__content'
            setActivePlace={setActivePlace}
            activeMarkerId={activeMarkerId}
            offersArray={offersArraySorted}
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

HomepageInnerContent.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
  currentCity: PropTypes.string.isRequired,
};

export default React.memo(HomepageInnerContent);
