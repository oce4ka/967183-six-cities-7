import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import {Link} from 'react-router-dom';
import PlaceCardInfo from './placecard-info';

function PlaceCard(props) {
  const {offer} = props;

  PlaceCard.propTypes = {
    offer: offerProp,
    onMouseEnter: PropTypes.func,
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={props.onMouseEnter}>
      {offer.is_premium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Beautiful &amp; luxurious apartment at great location"/>
        </Link>
      </div>
      <div className="place-card__info">
        <PlaceCardInfo offer={offer} />
      </div>
    </article>
  );
}

export default PlaceCard;
