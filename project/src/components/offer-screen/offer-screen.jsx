import React, {useEffect} from 'react';
import ReviewForm from '../review-form/review-form';
import {useLocation} from 'react-router-dom';
import ReviewList from '../review-list/review-list';
import Page from '../page/page';
import Main from '../main/main';
import PlacecardList from '../placecard-list/placecard-list';
import Map from '../map/map';
import {isUserLoggedIn} from '../../utils/check-auth';
import {fetchOffer, fetchOffersNearby, fetchReviews} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import useMapInteraction from '../../hooks/use-map-interaction';
import useScrollToTop from '../../hooks/use-scroll-to-top';
import HostInfo from '../offer-host-info/offer-host-info';
import OfferPropertyInfo from '../offer-property-info/offer-property-info';
import PropertyGallery from '../offer-property-gallery/offer-property-gallery';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getOffer, getOfferLoadedStatus, getOffersNearby, getOffersNearbyLoadedStatus} from '../../store/offer-data/selectors';
import {getReviews, getReviewsLoadedStatus} from '../../store/review-data/selectors';
import {useDispatch, useSelector} from 'react-redux';

function OfferScreen() {

  /* Todo: correct? Or better to send props as I did with currentCity and Cities? */
  const currentOfferId = Number(useLocation().pathname.replace('/offer/', '')); // get id from url

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const offer = useSelector(getOffer);
  const isOfferLoaded = useSelector(getOfferLoadedStatus);
  const offersArray = useSelector(getOffersNearby);
  const isOffersNearbyLoaded = useSelector(getOffersNearbyLoadedStatus);
  const reviews = useSelector(getReviews);
  const isReviewsLoaded = useSelector(getReviewsLoadedStatus);

  const [{activeMarkerId, setActiveMarker, activePlaceId, setActivePlace}] = useMapInteraction(0, 0);
  useScrollToTop(currentOfferId, true);

  const dispatch = useDispatch();

  useEffect(() => {
    const onPageLoad = (currentOffer) => {
      dispatch(fetchOffer(currentOffer));
      dispatch(fetchOffersNearby(currentOffer));
      dispatch(fetchReviews(currentOffer));
    };
    onPageLoad(currentOfferId);
  }, [currentOfferId, dispatch]);

  if (!isOfferLoaded || !isOffersNearbyLoaded || !isReviewsLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  /* todo: never??? Check!
  if (offer === undefined) {
    return (
      <Redirect to={AppRoute.PAGE404}/>
    );
  }*/

  return (
    <Page>
      <Main className="page__main--property">
        <section className="property">
          <PropertyGallery offer={offer}/>
          <div className="property__container container">
            <div className="property__wrapper">
              <OfferPropertyInfo offer={offer}/>
              <HostInfo offer={offer}/>
              <ReviewList reviews={reviews}/>
              {isUserLoggedIn(authorizationStatus) && <ReviewForm/>}
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
            <PlacecardList
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

export default OfferScreen;
