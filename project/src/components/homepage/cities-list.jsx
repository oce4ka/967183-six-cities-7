import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

function CitiesList(props) {
  const {cityPlaceArray, currentCity, onChangeCity} = props;

  const history = useHistory();
  const handleCityClick = (evt, cityPlace) => {
    evt.preventDefault();
    onChangeCity(cityPlace);
    //history.push(`#${cityPlace}`);
    history.push(); // todo: how to change city to old one when we click back button?
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityPlaceArray.map((cityPlace) => (
            <li className="locations__item" key={`li-${cityPlace}`}>
              <a
                href={`#${cityPlace}`}
                onClick={((evt) => handleCityClick(evt, cityPlace))}
                className={`locations__item-link tabs__item ${currentCity === cityPlace && 'tabs__item--active'}`}
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
