import React from 'react';
import convertStarsToPercent from '../../utils/convert-stars-to-percent';
import PropTypes from 'prop-types';
import offerProp from './offer.prop';

function PropertyInfo(props) {
  const {offer} = props;

  return (
    <React.Fragment>
      {offer.isPremium && <div className="property__mark"><span>Premium</span></div>}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {offer.title}
        </h1>
        <button className="property__bookmark-button button" type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          {/* Todo: bad? */}
          <span style={{width: `${convertStarsToPercent(offer.rating)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{offer.rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {offer.type}
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
          {/* Todo: why " Do not use Array index in keys" */}
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

PropertyInfo.propTypes = {
  offer: PropTypes.shape(offerProp),
};

export default React.memo(PropertyInfo);
