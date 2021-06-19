import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Header(props) {
  const {isUserLoggedIn = false} = props;

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
                  {isUserLoggedIn ? <LoginEmail/> : <LoginLink/>}
                </Link>
              </li>
              {isUserLoggedIn && <LogoutLink/>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function LogoutLink() {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to="/logout">
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

function LoginLink() {
  return (
    <span className="header__login">Sign in</span>
  );
}

function LoginEmail() {
  return (
    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
  );
}

Header.propTypes = {
  isUserLoggedIn: PropTypes.bool,
};

export default Header;
