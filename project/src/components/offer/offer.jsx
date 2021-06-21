/* eslint-disable no-console */
import React, {useState} from 'react';
import FormReview from './form-review';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import {useLocation} from 'react-router-dom';
import convertStarsToPercent from '../../utils/convert-stars-to-percent';
import ReviewsList from './reviews-list';
import {AppRoute} from '../../const';
import {Redirect} from 'react-router-dom';
import Page from './../app/page';
import Main from './../app/main';
import PlaceCardsList from '../placecard/placecards-list';
import Map from '../placecard/map';

function Offer(props) {
  const {isUserLoggedIn = true, offersArray} = props;
  const [activePlaceId, setActivePlaceId] = useState(0);
  const [activeMarkerId, setActiveMarkerId] = useState(0);
  /* Todo: correct? Or better to send props as I did with currentCity and Cities? */
  const currentOfferId = Number(useLocation().pathname.replace('/offer/', '')); // get id from url
  /* Todo: what is the best option to get the object with object.id=XX in array of objects? */
  const offer = offersArray.filter((item) => item.id === currentOfferId)[0]; // get offer with the same id as in url
  if (offer === undefined) {
    return (
      <Redirect to={AppRoute.PAGE404}/>
    );
  }

  const setActivePlace = (offerId) => {
    setActivePlaceId(offerId);
  };

  const setActiveMarker = (offerId) => {
    setActiveMarkerId(offerId);
  };

  return (
    <Page>
      <Main className="page__main--property">
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
                    {offer.host.isPro && 'Pro'}
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
          <Map
            className="property__map map"
            setActiveMarker={setActiveMarker}
            activePlaceId={activePlaceId}
            offersArray={offersArray}
            currentCity={offer.city.name}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceCardsList
              className="near-places__list places__list"
              setActivePlace={setActivePlace}
              activeMarkerId={activeMarkerId}
              offersArray={offersArray}
            />
          </section>
        </div>
      </Main>
    </Page>
  );
}

Offer.propTypes = {
  isUserLoggedIn: PropTypes.bool,
  offersArray: PropTypes.arrayOf(offerProp),
};

export default Offer;
