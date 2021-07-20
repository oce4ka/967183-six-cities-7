import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer-screen/offer.prop';
import {Link} from 'react-router-dom';
import convertRaitingToStars from '../../utils/convert-raiting-to-stars';
import useAddToFavorites from '../../hooks/use-add-to-favorites';
import {TypesOfProperty} from '../../const';

function PlacecardInfo(props) {
  const {offer, className = ''} = props;

  const handleClick = useAddToFavorites(offer.id, Number(!offer.isFavorite));

  return (
    <div className={`place-card__info ${className}`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button onClick={handleClick} className={`place-card__bookmark-button button${offer.isFavorite ? ' place-card__bookmark-button--active' : ''}`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${convertRaitingToStars(offer.rating)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{TypesOfProperty[offer.type]}</p>
    </div>
  );
}

PlacecardInfo.propTypes = {
  offer: offerProp,
  className: PropTypes.string,
};

export default React.memo(PlacecardInfo);
