import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import PlaceCard from './placecard';

function PlaceCardsList(props) {
  const {offersArray, setActivePlace, className, ...restProps} = props;

  const changeActivePlace = useCallback((offerId) => setActivePlace(offerId), [setActivePlace]);

  return (
    <div className={className}>
      {offersArray.map((offer) => (
        <PlaceCard {...restProps} key={offer.id} offer={offer} onMouseEnter={() => {
          changeActivePlace(offer.id);
        }} onMouseLeave={() => {
          changeActivePlace(0);
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
  // Todo: if some props have been using deeper, is it necessary to describe it here?
  isFavorites: PropTypes.bool,
  showPremium: PropTypes.bool,
};

export default React.memo(PlaceCardsList);
