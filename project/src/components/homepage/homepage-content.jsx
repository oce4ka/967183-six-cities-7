/* eslint-disable no-console */
import React, {useState} from 'react';
import PlaceCardsList from '../placecard/placecards-list';
import PropTypes from 'prop-types';
import offerProp from './../offer/offer.prop';
import Map from '../placecard/map';
import {AuthorizationStatus} from './../../const';

function HomepageContent(props) {
  const {offersArray, currentCity} = props;
  const [activePlaceId, setActivePlaceId] = useState(0);
  const [activeMarkerId, setActiveMarkerId] = useState(0);
  const showPremium = true;

  const setActivePlace = (offerId) => {
    setActivePlaceId(offerId);
  };

  const setActiveMarker = (offerId) => {
    setActiveMarkerId(offerId);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersArray.length} places to stay in {currentCity || '6 Cities'}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by </span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul style={{display: 'hidden'}} className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <PlaceCardsList
            className='cities__places-list places__list tabs__content'
            setActivePlace={setActivePlace}
            activeMarkerId={activeMarkerId}
            offersArray={offersArray}
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

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export default HomepageContent;
