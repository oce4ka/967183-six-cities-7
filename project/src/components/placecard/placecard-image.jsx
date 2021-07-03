import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import {Link} from 'react-router-dom';

function PlaceCardImage(props) {
  const {offer, isFavorites} = props;

  return (
    <div className={`${isFavorites ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
      <Link to={`/offer/${offer.id}`}>
        <img className="place-card__image" src={offer.previewImage} width={isFavorites ? '150' : '260'} height={isFavorites ? '110' : '200'} alt={offer.title}/>
      </Link>
    </div>
  );
}

PlaceCardImage.propTypes = {
  offer: offerProp,
  isFavorites: PropTypes.string.isRequired,
};

export default PlaceCardImage;
