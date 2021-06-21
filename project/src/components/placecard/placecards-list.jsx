import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import PlaceCard from './placecard';

function PlaceCardsList(props) {
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

PlaceCardsList.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
  setActivePlace: PropTypes.func,
  className: PropTypes.string,
  // Todo: if some props have been using deeper, is it necesarry to describe it here?
  isFavorites: PropTypes.bool,
  showPremium: PropTypes.bool,
};

export default PlaceCardsList;
