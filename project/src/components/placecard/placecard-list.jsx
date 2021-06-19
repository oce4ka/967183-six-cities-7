import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import PlaceCard from './placecard';

function PlaceCardList(props) {
  const {offersArray, setActivePlace, className, ...restProps} = props;

  return (
    <div className={className}>
      {offersArray.map((offer) => (
        <PlaceCard {...restProps} key={offer.id} offer={offer} onMouseEnter={() => {
          setActivePlace(offer.id);
        }} onMouseLeave={() => {
          setActivePlace(0);
        }}
        />),
      )}
    </div>
  );
}

PlaceCardList.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
  setActivePlace: PropTypes.func,
  className: PropTypes.string,
  isFavorites: PropTypes.bool,
  showPremium: PropTypes.bool,
};

export default PlaceCardList;
