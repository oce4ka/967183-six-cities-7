import React from 'react';
import convertRaitingToPercent from '../../utils/convert-raiting-to-percent';
import PropTypes from 'prop-types';
import offerProp from '../offer-screen/offer.prop';
import useAddToFavorites from '../../hooks/use-add-to-favorites';
import {TypesOfProperty} from '../../const';

function OfferPropertyInfo(props) {
  const {offer} = props;

  const handleClick = useAddToFavorites(offer.id, Number(!offer.isFavorite));

  return (
    <React.Fragment>
      {offer.isPremium && <div className="property__mark"><span>Premium</span></div>}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {offer.title}
        </h1>
        <button onClick={handleClick} className={`property__bookmark-button button${offer.isFavorite ? ' property__bookmark-button--active' : ''}`} type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${convertRaitingToPercent(offer.rating)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{offer.rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {TypesOfProperty[offer.type]}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {offer.bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {offer.maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{offer.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {offer.goods.map((goodsItem) =>
            (
              <li key={goodsItem} className="property__inside-item">
                {goodsItem}
              </li>
            ),
          )}
        </ul>
      </div>
    </React.Fragment>
  );
}

OfferPropertyInfo.propTypes = {
  offer: PropTypes.shape(offerProp),
};

export default OfferPropertyInfo;
