import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import {Link} from 'react-router-dom';
import PlaceCardInfo from './placecard-info';

function PlaceCard(props) {
  const {offer, onMouseEnter, onMouseLeave, isFavorites = '', showPremium = false, activeMarkerId} = props;
  const styleOfferWithHoveredMarker = {opacity: 0.6};

  return (
    <article style={(activeMarkerId === offer.id) ? styleOfferWithHoveredMarker : null} className={`${isFavorites ? 'favorites__card' : 'cities__place-card'} place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {showPremium && offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${isFavorites ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={isFavorites ? '150' : '260'} height={isFavorites ? '110' : '200'} alt={offer.title}/>
        </Link>
      </div>
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
