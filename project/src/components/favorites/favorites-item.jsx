import React from 'react';
import offerProp from '../offer/offer.prop';
import {Link} from 'react-router-dom';
import PlaceCardInfo from '../main/placecard-info';

function FavoritesItem(props) {
  const {offer} = props;

  FavoritesItem.propTypes = {
    offer: offerProp,
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.images[0]} width="150" height="110" alt={offer.title}/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <PlaceCardInfo offer={offer} />
      </div>
    </article>
  );
}

export default FavoritesItem;
