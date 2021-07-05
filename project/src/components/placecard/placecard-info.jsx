/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import {Link} from 'react-router-dom';
import convertStarsToPercent from '../../utils/convert-stars-to-percent';

function PlaceCardInfo(props) {
  const {offer, className = ''} = props;

  return (
    <div className={`place-card__info ${className}`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button${offer.isFavorite ? ' place-card__bookmark-button--active' : ''}`} type="button">
          {/* Todo: favorites */}
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${convertStarsToPercent(offer.rating)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  );
}

PlaceCardInfo.propTypes = {
  offer: offerProp,
  className: PropTypes.string,
};

export default React.memo(PlaceCardInfo);
