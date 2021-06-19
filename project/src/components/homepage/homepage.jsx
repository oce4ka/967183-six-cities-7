/* eslint-disable no-console */
import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import HomepageContent from './homepage-content';
import offerProp from './../offer/offer.prop';
import Page from './../app/page';

function Homepage(props) {
  const {cityPlaceArray, offersArray = [], currentCity = ''} = props;

  return (
    <Page className="page--gray page--main" {...props}>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cityPlaceArray.map((cityPlace) => (
                <li className="locations__item" key={`li-${cityPlace}`}>
                  <NavLink to={`/${cityPlace}`} activeClassName="tabs__item--active" className="locations__item-link tabs__item"><span>{cityPlace}</span></NavLink>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <HomepageContent offersArray={offersArray} currentCity={currentCity}/>
      </main>
    </Page>
  );
}

Homepage.propTypes = {
  cityPlaceArray: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  offersArray: PropTypes.arrayOf(offerProp),
  currentCity: PropTypes.string,
};

export default Homepage;
