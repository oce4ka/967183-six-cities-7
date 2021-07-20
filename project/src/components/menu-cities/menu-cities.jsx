import React from 'react';
import PropTypes from 'prop-types';

function MenuCities(props) {
  const {cityPlaceArray, currentCity, onChangeCity} = props;

  const handleCityClick = (evt, cityPlace) => {
    evt.preventDefault();
    onChangeCity(cityPlace);
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

MenuCities.propTypes = {
  cityPlaceArray: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string,
  onChangeCity: PropTypes.func,
};

export default MenuCities;
