import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import {Link} from 'react-router-dom';
import PlaceCardInfo from './placecard-info';

function PlaceCard(props) {
  const {offer} = props;

  return (
    <article className="cities__place-card place-card" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title}/>
        </Link>
      </div>
      <div className="place-card__info">
        <PlaceCardInfo offer={offer} />
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offerProp,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default PlaceCard;
