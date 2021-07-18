/* eslint-disable no-console */
import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Page from '../page/page';
import Main from '../main/main';

function Page404Screen() {
  const history = useHistory();

  return (
    <Page className="page--favorites-empty">
      <Main className="page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper" style={{backgroundImage: 'url(/img/404-error.svg)'}}>
              <b className="favorites__status">404. Not Found.</b>
              <Link to={'/'} className="favorites__status-description">Return home</Link>
              <button onClick={() => history.goBack()} className="favorites__status-description">Return back</button>
            </div>
          </section>
        </div>
      </Main>
      <footer className="footer">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </Page>
  );
}

export default Page404Screen;
