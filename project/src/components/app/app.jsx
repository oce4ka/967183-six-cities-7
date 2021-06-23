import React from 'react';
import Homepage from '../homepage/homepage';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login/login';
import Offer from '../offer/offer';
import Favorites from '../favorites/favorites';
import Page404 from '../page404/page404';
import offerProp from '../offer/offer.prop';
import {AppRoute} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {isCheckedAuth} from '../homepage/homepage-content';

function App(props) {
  const {cityPlaceArray, offersArray, authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.LOGIN}>
          <Login/>
        </Route>
        <Route path={AppRoute.FAVORITES}>
          <Favorites offersArray={offersArray}/>
        </Route>
        <Route path={AppRoute.OFFER}>
          <Offer offersArray={offersArray}/>
        </Route>
        <Route path={AppRoute.ROOT} exact>
          <Homepage
            cityPlaceArray={cityPlaceArray}
          />
        </Route>
        <Route>
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cityPlaceArray: PropTypes.arrayOf(PropTypes.string),
  offersArray: PropTypes.arrayOf(
    offerProp,
  ),
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
