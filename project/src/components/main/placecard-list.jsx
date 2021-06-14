import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import PlaceCard from './placecard';

function PlaceCardList(props) {
  const [placeCardActive, setPlaceCardActive] = React.useState(0);
  const {offersArray} = props;

  PlaceCardList.propTypes = {
    offersArray: PropTypes.arrayOf(offerProp),
  };

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

export default PlaceCardList;