/* eslint-disable no-console */
import React, {useEffect} from 'react';
import FormReview from './form-review';
import offerProp from '../offer/offer.prop';
import reviewProp from '../offer/review.prop';
import {useLocation} from 'react-router-dom';
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
import HostInfo from './host-info';
import PropertyInfo from './property-info';
import PropertyGallery from './property-gallery';

function Offer(props) {
  const {
    offer,
    authorizationStatus,
    onPageLoad,
    isOfferLoaded = false,
    offersNearby: offersArray,
    isOffersNearbyLoaded = false,
    reviews,
    isReviewsLoaded = false,
  } = props;
  /* Todo: correct? Or better to send props as I did with currentCity and Cities? */
  const currentOfferId = Number(useLocation().pathname.replace('/offer/', '')); // get id from url

  const [{activeMarkerId, setActiveMarker, activePlaceId, setActivePlace}] = useMapInteraction(0, 0);
  useScrollToTop(currentOfferId, true);

  useEffect(() => {
    onPageLoad(currentOfferId);
  }, [currentOfferId, onPageLoad]);

  if (!isOfferLoaded || !isOffersNearbyLoaded || !isReviewsLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  /* todo: never??? Check! */
  if (offer === undefined) {
    return (
      <Redirect to={AppRoute.PAGE404}/>
    );
  }

  return (
    <Page>
      <Main className="page__main--property">
        <section className="property">
          <PropertyGallery offer={offer}/>
          <div className="property__container container">
            <div className="property__wrapper">
              <PropertyInfo offer={offer}/>
              <HostInfo offer={offer}/>
              <ReviewsList reviews={reviews}/>
              {isUserLoggedIn(authorizationStatus) &&
              <FormReview
                onAnswer={() => {
                }}
              />}
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
  offer: PropTypes.shape(offerProp),
  isOfferLoaded: PropTypes.bool.isRequired,
  offersNearby: PropTypes.arrayOf(offerProp),
  isOffersNearbyLoaded: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProp)),
  isReviewsLoaded: PropTypes.bool.isRequired,
};

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
