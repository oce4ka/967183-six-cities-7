import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../homepage/header';

function Page404() {
  return (
    <div className="page page--favorites-empty">
      <Header/>

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper" style={{backgroundImage: 'url(/img/404-error.svg)'}}>
              <b className="favorites__status">404. Not Found.</b>
              <Link to={'/'} className="favorites__status-description">Return home</Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default Page404;
