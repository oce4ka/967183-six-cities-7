import React from 'react';
import Homepage from '../homepage/homepage';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login/login';
import Offer from '../offer/offer';
import Favorites from '../favorites/favorites';
import Page404 from '../page404/page404';
import {AppRoute} from '../../const';
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import {getDataLoadedStatus} from '../../store/offer-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

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
          <Login/>
        </Route>
        <PrivateRoute
          exact
          authorizationStatus={authorizationStatus}
          path={AppRoute.FAVORITES}
          render={() => <Favorites/>}
        >
        </PrivateRoute>
        <Route path={AppRoute.OFFER}>
          <Offer/>
        </Route>
        <Route path={AppRoute.ROOT} exact>
          <Homepage/>
        </Route>
        <Route>
          <Page404/>
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
