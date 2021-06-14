import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offersArray from './mocks/offers';

const Setting = {
  CITY_PLACES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cityPlaceArray={Setting.CITY_PLACES}
      offersArray={offersArray}
    />
  </React.StrictMode>,
  document.getElementById('root'));
