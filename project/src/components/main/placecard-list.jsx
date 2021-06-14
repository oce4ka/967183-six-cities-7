import React, {useState} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import PlaceCard from './placecard';

function PlaceCardList(props) {
  const [placeCardActive, setPlaceCardActive] = useState(0);
  const {offersArray} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersArray.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} onMouseEnter={() => {
          setPlaceCardActive(offer.id);
        }}
        />),
      )}

      <div>Todo: Show Property #{placeCardActive} on the map</div>
    </div>
  );
}

PlaceCardList.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
};

export default PlaceCardList;
