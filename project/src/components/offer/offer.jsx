/* eslint-disable no-console */
import React from 'react';
import Header from '../homepage/header';
import FormReview from './form-review';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import {useLocation} from 'react-router-dom';
import PlaceCard from '../homepage/placecard';
import convertStarsToPercent from '../../utils/convert-start-to-percent';
import ReviewsList from './reviews-list';
//import Map from '../homepage/map';

function Offer(props) {
  const {isUserLoggedIn = true, offersArray} = props;
  /* Todo: correct? Or better to send props as I did with currentCity and Cities? */
  const currentOfferId = Number(useLocation().pathname.replace('/offer/', '')); // get id from url
  const offer = offersArray.filter((item) => item.id === currentOfferId)[0]; // get offer with the same id as in url
  //console.log(offer);
  // For map:
  //const currentCity = 'Amsterdam';
  //const activePlaceId = currentOfferId;

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((imageUrl) =>
                (
                  <div className="property__image-wrapper" key={imageUrl}>
                    <img className="property__image" src={imageUrl} alt={offer.title}/>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
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
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt={offer.host.name}/>
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList/>
                {isUserLoggedIn &&
                <FormReview
                  onAnswer={() => {
                  }}
                />}
              </section>
            </div>
          </div>
          {/*<Map currentCity={currentCity} activePlaceId={activePlaceId} offersArray={offersArray}/>*/}
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersArray.map((relatedOffer) => (
                <PlaceCard key={relatedOffer.id} offer={relatedOffer}/>),
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Offer.propTypes = {
  isUserLoggedIn: PropTypes.bool,
  offersArray: PropTypes.arrayOf(offerProp),
};

export default Offer;
