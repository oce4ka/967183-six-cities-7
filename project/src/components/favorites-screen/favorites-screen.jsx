/* eslint-disable no-console */
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import FavoritesEmptyContent from '../favorites-empty-content/favorites-empty-content';
import Page from '../page/page';
import FavoritesInnerContent from '../favorites-inner-content/favorites-inner-content';
import {getOffersFavorites} from '../../store/offer-data/selectors';

function FavoritesScreen() {
  const offersArray = useSelector(getOffersFavorites);

  const favoriteOffersArray = [...offersArray];
  const isFavoritesEmpty = !(favoriteOffersArray.length > 0);

  return (
    <Page className={isFavoritesEmpty ? 'page--favorites-empty' : ''}>
      {isFavoritesEmpty ? <FavoritesEmptyContent/> : <FavoritesInnerContent favoriteOffersArray={favoriteOffersArray}/>}
      <footer className={isFavoritesEmpty ? 'footer' : 'footer container'}>
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </Page>
  );
}

export default FavoritesScreen;
