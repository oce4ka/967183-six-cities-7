import React, {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import Main from '../main/main';
import {Link} from 'react-router-dom';
import PlacecardList from '../placecard-list/placecard-list';
import PropTypes from 'prop-types';
import offerProp from '../offer-screen/offer.prop';
import {Cities} from '../../const';
import {changeCity} from '../../store/action';

function FavoritesInnerContent(props) {
  const {favoriteOffersArray} = props;
  const isForFavorites = true;

  const getOffersArrayByCity = useMemo(() => (cityName) => favoriteOffersArray.filter((offer) => offer.city.name === cityName), [favoriteOffersArray]);

  const dispatch = useDispatch();
  const handleRedirectToCity = (city) => {
    dispatch(changeCity(city));
  };

  return (
    <Main className="page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Cities.map((city) => (
              !!getOffersArrayByCity(city.name).length &&
              <li key={city.name} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link onClick={() => handleRedirectToCity(city.name)} className="locations__item-link" to='/'>
                      <span>{city.name}</span>
                    </Link>
                  </div>
                </div>
                <PlacecardList isForFavorites={isForFavorites} setActivePlace={() => void (0)} offersArray={getOffersArrayByCity(city.name)} className='favorites__places'/>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Main>
  );
}

FavoritesInnerContent.propTypes = {
  favoriteOffersArray: PropTypes.arrayOf(offerProp),
};

export default FavoritesInnerContent;
