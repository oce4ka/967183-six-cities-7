import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import PlaceCardInfo from './placecard-info';
import PlaceCardImage from './placecard-image';

function PlaceCard(props) {
  const {offer, onMouseEnter, onMouseLeave, isFavorites = '', showPremium = false, activeMarkerId} = props;
  const styleOfferWithHoveredMarker = {opacity: 0.6};

  return (
    <article style={(activeMarkerId === offer.id) ? styleOfferWithHoveredMarker : null} className={`${isFavorites ? 'favorites__card' : 'cities__place-card'} place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {showPremium && offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <PlaceCardImage offer={offer} isFavorites={isFavorites}/>
      <PlaceCardInfo className={isFavorites && 'favorites__card-info'} offer={offer}/>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offerProp,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  showPremium: PropTypes.bool,
  isFavorites: PropTypes.bool,
  activeMarkerId: PropTypes.number,
};

export default PlaceCard;
