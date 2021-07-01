/* eslint-disable no-console */
import React, {useState} from 'react';
import PlaceCardsList from '../placecard/placecards-list';
import PropTypes from 'prop-types';
import offerProp from './../offer/offer.prop';
import Map from '../placecard/map';
import {FilterOffersOptions} from './../../const';

function HomepageContent(props) {
  const {offersArray, currentCity} = props;
  const [activePlaceId, setActivePlaceId] = useState(0);
  const [activeMarkerId, setActiveMarkerId] = useState(0);
  const [filterVisibilityFlag, setFilterVisibilityFlag] = useState(false);
  const [filterValue, setFilterValue] = useState(FilterOffersOptions.POPULAR);
  const [filteredOffersArray, setFilteredOffersArray] = useState(offersArray);
  const showPremium = true;

  const setActivePlace = (offerId) => {
    setActivePlaceId(offerId);
  };

  const setActiveMarker = (offerId) => {
    setActiveMarkerId(offerId);
  };

  const toggleVisibilityFlag = (evt) => {
    setFilterVisibilityFlag(!filterVisibilityFlag);
  };

  const handleClickFilter = (evt) => {
    toggleVisibilityFlag();
  };

  const handleClickChooseFilter = (evt) => {
    //console.log(evt.target.textContent);
    setFilterVisibilityFlag(!filterVisibilityFlag);
    setFilterValue(evt.target.textContent);
    switch (filterValue) {
      case FilterOffersOptions.RATING_DESCENDING:
        setFilteredOffersArray(offersArray.filter((offer) => offer.rating > 4));
        break;
      case FilterOffersOptions.PRICE_DESCENDING:
        setFilteredOffersArray(offersArray.filter((offer) => offer.rating > 2));
        break;
      case FilterOffersOptions.PRICE_ASCENDING:
        setFilteredOffersArray(offersArray.filter((offer) => offer.rating < 3));
        break;
      default:
        setFilteredOffersArray(offersArray);
    }

  };

  const getListItemClass = (currentFilter) => (currentFilter === filterValue ? 'places__option places__option--active' : 'places__option');

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersArray.length} places to stay in {currentCity || '6 Cities'}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by </span>
            <span onClick={handleClickFilter} className="places__sorting-type" tabIndex="0">
              {filterValue}
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul onClick={handleClickChooseFilter} className={`places__options places__options--custom ${filterVisibilityFlag && 'places__options--opened'}`}>
              <li className={getListItemClass(FilterOffersOptions.POPULAR)} tabIndex="0">
                {FilterOffersOptions.POPULAR}
              </li>
              <li className={getListItemClass(FilterOffersOptions.PRICE_ASCENDING)} tabIndex="0">
                {FilterOffersOptions.PRICE_ASCENDING}
              </li>
              <li className={getListItemClass(FilterOffersOptions.PRICE_DESCENDING)} tabIndex="0">
                {FilterOffersOptions.PRICE_DESCENDING}
              </li>
              <li className={getListItemClass(FilterOffersOptions.RATING_DESCENDING)} tabIndex="0">
                {FilterOffersOptions.RATING_DESCENDING}
              </li>
            </ul>
          </form>
          <PlaceCardsList
            className='cities__places-list places__list tabs__content'
            setActivePlace={setActivePlace}
            activeMarkerId={activeMarkerId}
            offersArray={filteredOffersArray}
            showPremium={showPremium}
          />
        </section>
        <div className="cities__right-section">
          {
            <Map
              className="cities__map map"
              setActiveMarker={setActiveMarker}
              activePlaceId={activePlaceId}
              offersArray={offersArray}
              currentCity={currentCity}
            />
          }
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
