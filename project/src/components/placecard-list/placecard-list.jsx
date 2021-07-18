import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer-screen/offer.prop';
import Placecard from '../placecard/placecard';

function PlacecardList(props) {
  const {offersArray, setActivePlace, className, ...restProps} = props;

  const changeActivePlace = useCallback((offerId) => setActivePlace(offerId), [setActivePlace]);

  return (
    <div className={className}>
      {offersArray.map((offer) => (
        <Placecard {...restProps} key={offer.id} offer={offer} onMouseEnter={() => {
          changeActivePlace(offer.id);
        }} onMouseLeave={() => {
          changeActivePlace(0);
        }}
        />),
      )}
    </div>
  );
}

PlacecardList.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
  setActivePlace: PropTypes.func,
  className: PropTypes.string,
};

export default React.memo(PlacecardList);
