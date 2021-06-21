import React from 'react';
import PropTypes from 'prop-types';
//import {useHistory} from 'react-router-dom';

function CitiesList(props) {
  const {cityPlaceArray, currentCity, onChangeCity} = props;
  //const history = useHistory();
  //history.replace(`#${currentCity}`);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityPlaceArray.map((cityPlace) => (
            <li className="locations__item" key={`li-${cityPlace}`}>
              <a href={`#1${cityPlace}`} onClick={(evt) => {
                evt.preventDefault();
                onChangeCity(cityPlace);
                //history.push(`#${cityPlace}`);
              }} className={`locations__item-link tabs__item ${currentCity === cityPlace && 'tabs__item--active'}`}
              >
                <span>{cityPlace}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

CitiesList.propTypes = {
  cityPlaceArray: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string,
  onChangeCity: PropTypes.func,
};

export default CitiesList;
