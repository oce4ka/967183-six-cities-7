/* eslint-disable no-console */
import React, {useState} from 'react';
import PlaceCardList from './placecard-list';
import PropTypes from 'prop-types';
import offerProp from './../offer/offer.prop';
import Map from './map';

function Cities(props) {
  const {offersArray, currentCity = ''} = props;
  const [activePlaceId, setActivePlaceId] = useState(0);

  const setActivePlace = (offerId) => {
    setActivePlaceId(offerId);
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
          <PlaceCardList setActivePlace={setActivePlace} offersArray={offersArray}/>
        </section>
        <div className="cities__right-section">
          <Map currentCity={currentCity} activePlaceId={activePlaceId} offersArray={offersArray}/>
        </div>
      </div>
    </div>
  );
}

Cities.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
  currentCity: PropTypes.string,
};

export default Cities;
