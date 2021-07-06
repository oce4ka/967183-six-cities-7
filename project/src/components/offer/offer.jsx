/* eslint-disable no-console */
import React, {useEffect} from 'react';
import FormReview from './form-review';
import offerProp from '../offer/offer.prop';
import reviewProp from '../offer/review.prop';
import {useLocation} from 'react-router-dom';
import convertStarsToPercent from '../../utils/convert-stars-to-percent';
import ReviewsList from './reviews-list';
import {AppRoute} from '../../const';
import {Redirect} from 'react-router-dom';
import Page from './../app/page';
import Main from './../app/main';
import PlaceCardsList from '../placecard/placecards-list';
import Map from '../placecard/map';
import {connect} from 'react-redux';
import {isUserLoggedIn} from '../../utils/check-auth';
import PropTypes from 'prop-types';
import {fetchOffer, fetchOfferListNearby, fetchReviews} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import convertKeysToCamel from '../../utils/convert-keys-to-camel';
import useMapInteraction from '../../hooks/use-map-interaction';
import useScrollToTop from '../../hooks/use-scroll-to-top';

function Offer(props) {
  const {
    offer,
    authorizationStatus,
    onPageLoad,
    isOfferLoaded = false,
    offersNearby:offersArray,
    isOffersNearbyLoaded = false,
    reviews,
    isReviewsLoaded = false,
  } = props;
  /* Todo: correct? Or better to send props as I did with currentCity and Cities? */
  const currentOfferId = Number(useLocation().pathname.replace('/offer/', '')); // get id from url

  const [{activeMarkerId, setActiveMarker, activePlaceId, setActivePlace}] = useMapInteraction(0,0);
  useScrollToTop(currentOfferId, true);

  useEffect(() => {
    onPageLoad(currentOfferId);
  }, [currentOfferId, onPageLoad]);

  if (!isOfferLoaded || !isOffersNearbyLoaded || !isReviewsLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  /* Todo: what is the best option to get the object with object.id=XX in array of objects? */
  /* todo: never??? */
  if (offer === undefined) {
    return (
      <Redirect to={AppRoute.PAGE404}/>
    );
  }

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
                <ReviewsList reviews={reviews}/>
                {isUserLoggedIn(authorizationStatus) &&
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

const mapDispatchToProps = (dispatch) => ({
  onPageLoad(currentOfferId) {
    //console.log(currentOfferId);
    dispatch(fetchOffer(currentOfferId));
    dispatch(fetchOfferListNearby(currentOfferId));
    dispatch(fetchReviews(currentOfferId));
  },
  /*
  loadOffer(currentOfferId) {
    dispatch(ActionCreator.loadOffer(currentOfferId));
  },
  */
});

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  offer: convertKeysToCamel(state.offer),
  isOfferLoaded: state.isOfferLoaded,
  offersNearby: convertKeysToCamel(state.offersNearby),
  isOffersNearbyLoaded: state.isOffersNearbyLoaded,
  reviews: convertKeysToCamel(state.reviews),
  isReviewsLoaded: state.isReviewsLoaded,
});

Offer.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onPageLoad: PropTypes.func.isRequired,
  offer: PropTypes.shape(offerProp), //Todo: Why???
  isOfferLoaded: PropTypes.bool.isRequired,
  offersNearby: PropTypes.arrayOf(offerProp),
  isOffersNearbyLoaded: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProp)),
  isReviewsLoaded: PropTypes.bool.isRequired,
};

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
