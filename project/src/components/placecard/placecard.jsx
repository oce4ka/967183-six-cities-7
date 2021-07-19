import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer-screen/offer.prop';
import PlacecardInfo from '../placecard-info/placecard-info';
import PlacecardImage from '../placecard-image/placecard-image';

function Placecard(props) {
  const {offer, onMouseEnter, onMouseLeave, isForFavorites = false, activeMarkerId} = props;
  const styleOfferWithHoveredMarker = {opacity: 0.6};

  return (
    <article style={(activeMarkerId === offer.id) ? styleOfferWithHoveredMarker : null} className={`${isForFavorites ? 'favorites__card' : 'cities__place-card'} place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <PlacecardImage offer={offer} isForFavorites={isForFavorites}/>
      <PlacecardInfo className={isForFavorites ? 'favorites__card-info' : ''} offer={offer}/>
    </article>
  );
}

Placecard.propTypes = {
  offer: offerProp,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isForFavorites: PropTypes.bool,
  activeMarkerId: PropTypes.number,
};

// preventing reloading of all cards if we need to highlight the only one card because of hovered marker on map or to change Favorite marker
const isPlacecardHighlightingChanged = (propsPrev, propsNext) => (
  propsPrev.activeMarkerId !== propsPrev.offer.id &&
  propsNext.activeMarkerId !== propsNext.offer.id &&
  !(propsPrev.offer.isFavorite !== propsNext.offer.isFavorite)
);

export default React.memo(Placecard, isPlacecardHighlightingChanged);


