import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {isUserLoggedIn} from '../../utils/check-auth';
import {logout, resetError} from '../../store/api-actions';
import {getAuthInfo, getAuthorizationStatus} from '../../store/user/selectors';
import {getErrorMessage} from '../../store/seek-process/selectors';
import Settings, {AppRoute} from '../../const';

function Header(props) {
  const {authorizationStatus, onLogOut, email = '', errorText, onErrorIsAppeared} = props;

  const handleLogOut = (evt) => {
    evt.preventDefault();
    onLogOut();
  };

  errorText && setTimeout(() => {onErrorIsAppeared();}, Settings.MAX_TIME_SHOW_ERROR); //remove error message after it has been shown

  return (
    <header className="header">
      {errorText && <div className="alert">{errorText}</div>}
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link"><img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/></Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={isUserLoggedIn(authorizationStatus) ? AppRoute.FAVORITES : AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {
                    isUserLoggedIn(authorizationStatus) ?
                      <span className="header__user-name user__name">{email}</span> :
                      <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
              {
                isUserLoggedIn(authorizationStatus)
                &&
                <li className="header__nav-item">
                  <Link className="header__nav-link" onClick={handleLogOut} to="/logout">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  //isUserLoggedIn: PropTypes.bool,
  authorizationStatus: PropTypes.string.isRequired,
  onLogOut: PropTypes.func.isRequired,
  onErrorIsAppeared: PropTypes.func.isRequired,
  email: PropTypes.string,
  errorText: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  email: getAuthInfo(state).email,
  errorText: getErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogOut() {
    dispatch(logout());
  },
  onErrorIsAppeared() {
    dispatch(resetError());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
