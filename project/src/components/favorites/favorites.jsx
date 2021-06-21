import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FavoritesEmpty from './favorites-empty';
import offerProp from '../offer/offer.prop';
import Page from './../app/page';
import Main from './../app/main';
import PlaceCardsList from '../placecard/placecards-list';

function Favorites(props) {
  const {offersArray} = props;
  const favoriteOffersArray = offersArray.filter((offerItem) => offerItem.isFavorite === true);
  const isFavoritesEmpty = !(favoriteOffersArray.length > 0);

  return (
    <Page className={isFavoritesEmpty ? 'page--favorites-empty' : ''}>
      {isFavoritesEmpty ? <FavoritesEmpty/> : <FavoritesNotEmpty favoriteOffersArray={favoriteOffersArray}/>}
      <footer className={isFavoritesEmpty ? 'footer' : 'footer container'}>
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </Page>
  );
}

function FavoritesNotEmpty(props) {
  const {favoriteOffersArray} = props;
  const isFavorites = true;

  return (
    <Main className="page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to='/'>
                    <span>Amsterdam</span>
                    {/* Todo: onclick change state.city */}
                  </Link>
                </div>
              </div>
              <PlaceCardsList isFavorites={isFavorites} setActivePlace={() => void (0)} offersArray={favoriteOffersArray} className='favorites__places'/>
            </li>
          </ul>
        </section>
      </div>
    </Main>
  );
}

FavoritesNotEmpty.propTypes = {
  favoriteOffersArray: PropTypes.arrayOf(offerProp),
};

Favorites.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
};

export default Favorites;
