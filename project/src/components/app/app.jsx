import React from 'react';
import HomepageScreen from '../homepage-screen/homepage-screen';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import {connect} from 'react-redux'; //todo: replace connect to hooks?
import PrivateRoute from '../private-route/private-route';
import {getDataLoadedStatus} from '../../store/offer-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import LoginScreen from '../login-screen/login-screen';
import OfferScreen from '../offer-screen/offer-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import Page404Screen from '../page404-screen/page404-screen';
import LoadingScreen from '../loading-screen/loading-screen';

function App(props) {
  const {isDataLoaded, authorizationStatus} = props;

  if (!isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.LOGIN}>
          <LoginScreen/>
        </Route>
        <PrivateRoute
          exact
          authorizationStatus={authorizationStatus}
          path={AppRoute.FAVORITES}
          render={() => <FavoritesScreen/>}
        >
        </PrivateRoute>
        <Route path={AppRoute.OFFER}>
          <OfferScreen/>
        </Route>
        <Route path={AppRoute.ROOT} exact>
          <HomepageScreen/>
        </Route>
        <Route>
          <Page404Screen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: getDataLoadedStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
