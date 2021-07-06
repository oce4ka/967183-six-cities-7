import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {isUserLoggedIn} from '../../utils/check-auth';
import {logout} from '../../store/api-actions';

function Header(props) {
  const {authorizationStatus, onLogOut, email = ''} = props;

  const handleLogOut = (evt) => {
    evt.preventDefault();
    onLogOut();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link"><img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/></Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to="/login" className="header__nav-link header__nav-link--profile">
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
  email: PropTypes.string,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  email: USER.authInfo.email,
});

const mapDispatchToProps = (dispatch) => ({
  onLogOut() {
    dispatch(logout());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
