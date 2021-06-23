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

function App(props) {
  const {cityPlaceArray} = props;

  const {isDataLoaded} = props;

  if (!isDataLoaded) {
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
          <Favorites/>
        </Route>
        <Route path={AppRoute.OFFER}>
          <Offer/>
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
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
