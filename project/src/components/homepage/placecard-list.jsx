import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import PlaceCard from './placecard';

function PlaceCardList(props) {
  //const [placeCardActive, setPlaceCardActive] = useState(0);
  const {offersArray, setActivePlace} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersArray.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} onMouseEnter={() => {
          //setPlaceCardActive(offer.id);
          setActivePlace(offer.id);
        }} onMouseLeave={() => {
          //setPlaceCardActive(offer.id);
          setActivePlace(0);
        }}
        />),
      )}
    </div>
  );
}

PlaceCardList.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
  setActivePlace: PropTypes.func.isRequired,
};

export default PlaceCardList;
