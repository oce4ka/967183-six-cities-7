/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FavoritesEmpty from './favorites-empty';
import offerProp from '../offer/offer.prop';
import FavoritesCard from './favorites-card';
import Page from './../app/page';
import Main from './../app/main';

function Favorites(props) {
  const {offersArray} = props;
  const favoriteOffersArray = offersArray.filter((offerItem) => offerItem.isFavorite === true);
  const isFavoritesEmpty = !(favoriteOffersArray.length > 0);

  return (
    <Page className={isFavoritesEmpty && 'page--favorites-empty'}>
      {isFavoritesEmpty ? <FavoritesEmpty/> : <FavoritesNotEmpty favoriteOffersArray={favoriteOffersArray}/>}
      <footer className={isFavoritesEmpty ? 'footer' : 'footer container'}>

        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </Page>
  );
}

function FavoritesNotEmpty(props) {
  const {favoriteOffersArray} = props;

  FavoritesNotEmpty.propTypes = {
    favoriteOffersArray: PropTypes.arrayOf(offerProp),
  };

  return (
    <Main className="page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to='/Amsterdam'>
                    <span>Amsterdam</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {favoriteOffersArray.map((offer) => (<FavoritesCard key={offer.id} offer={offer}/>))}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </Main>
  );
}

Favorites.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
};

export default Favorites;
