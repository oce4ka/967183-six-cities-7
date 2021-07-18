import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer-screen/offer.prop';
import {Link} from 'react-router-dom';

function PlacecardImage(props) {
  const {offer, isForFavorites = false} = props;

  return (
    <div className={`${isForFavorites ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
      <Link to={`/offer/${offer.id}`}>
        <img className="place-card__image" src={offer.previewImage} width={isForFavorites ? '150' : '260'} height={isForFavorites ? '110' : '200'} alt={offer.title}/>
      </Link>
    </div>
  );
}

PlacecardImage.propTypes = {
  offer: offerProp,
  isForFavorites: PropTypes.bool.isRequired,
};

export default React.memo(PlacecardImage);
