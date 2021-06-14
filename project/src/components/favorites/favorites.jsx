import React from 'react';
import PropTypes from 'prop-types';
import Header from '../main/header';
import FavoritesEmpty from './favorites-empty';
import offerProp from '../offer/offer.prop';
import FavoritesItem from './favorites-item';

function Favorites(props) {
  const {offersArray} = props;
  const isFavoritesEmpty = !(offersArray.length > 0);
  //console.log(isFavoritesEmpty);

  Favorites.propTypes = {
    offersArray: PropTypes.arrayOf(offerProp),
  };

  return (
    <div className={isFavoritesEmpty ? 'page page--favorites-empty' : 'page'}>
      <Header/>

      {isFavoritesEmpty ? <FavoritesEmpty/> : <FavoritesNotEmpty offersArray={offersArray}/>}
      <footer className={isFavoritesEmpty ? 'footer' : 'footer container'}>
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

function FavoritesNotEmpty(props) {
  const {offersArray} = props;

  FavoritesNotEmpty.propTypes = {
    offersArray: PropTypes.arrayOf(offerProp),
  };

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="/offer/id">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offersArray.map((offer) => (<FavoritesItem key={offer.id} offer={offer}/>))}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
