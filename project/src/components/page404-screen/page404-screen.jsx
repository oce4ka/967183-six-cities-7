import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Page from '../page/page';
import Main from '../main/main';

function Page404Screen() {
  const history = useHistory();

  const clickHandle = (evt) => {
    evt.preventDefault();
    history.goBack();
  };

  return (
    <Page className="page--favorites-empty">
      <Main className="page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">404. Not Found.</h1>
            <div className="favorites__status-wrapper" style={{backgroundImage: 'url(/img/404-error.svg)'}}>
              <b className="favorites__status">404. Not Found.</b>
              <Link to={'/'} className="favorites__status-description">Return home</Link>
              <a href="#back" onClick={clickHandle} className="favorites__status-description">Return back</a>
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
