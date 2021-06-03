import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import PlaceCard from './placecard';
import Header from './header';

// todo: why not const AnotherComponent = ({props}) => {
// todo: linter does't like that <a> is without href
function Homepage(props) {
  const {cityPlaceArray = []} = props;

  Homepage.propTypes = {
    cityPlaceArray: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ),
  };

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <NavLink to="/Paris" activeClassName="tabs__item--active" className="locations__item-link tabs__item"><span>Paris</span></NavLink>
              </li>
              <li className="locations__item">
                <NavLink to="/Cologne" activeClassName="tabs__item--active" className="locations__item-link tabs__item"><span>Cologne</span></NavLink>
              </li>
              <li className="locations__item">
                <NavLink to="/Brussels" activeClassName="tabs__item--active" className="locations__item-link tabs__item"><span>Brussels</span></NavLink>
              </li>
              <li className="locations__item">
                <NavLink to="/Amsterdam" activeClassName="tabs__item--active" className="locations__item-link tabs__item"><span>Amsterdam</span></NavLink>
              </li>
              <li className="locations__item">
                <NavLink to="/Hamburg" activeClassName="tabs__item--active" className="locations__item-link tabs__item"><span>Hamburg</span></NavLink>
              </li>
              <li className="locations__item">
                <NavLink to="/Dusseldorf" activeClassName="tabs__item--active" className="locations__item-link tabs__item"><span>Dusseldorf</span></NavLink>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">

                {cityPlaceArray.map((cityPlace) => <PlaceCard key={cityPlace}/>)}

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
