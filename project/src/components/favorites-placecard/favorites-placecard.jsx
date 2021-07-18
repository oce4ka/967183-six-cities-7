import React from 'react';
import offerProp from '../offer-screen/offer.prop';
import {Link} from 'react-router-dom';
import PlacecardInfo from '../placecard-info/placecard-info';

function FavoritesPlacecard(props) {
  const {offer} = props;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt={offer.title}/>
        </Link>
      </div>
      <PlacecardInfo className="favorites__card-info" offer={offer}/>
    </article>
  );
}

FavoritesPlacecard.propTypes = {
  offer: offerProp,
};

export default FavoritesPlacecard;
