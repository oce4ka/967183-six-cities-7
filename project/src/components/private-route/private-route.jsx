import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute} from '../../const';
import {isUserLoggedIn} from '../../utils/check-auth';

function PrivateRoute({render, path, exact, authorizationStatus}) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        isUserLoggedIn(authorizationStatus)
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN}/>
      )}
    />
  );
}

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
