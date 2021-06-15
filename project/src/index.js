import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offersArray from './mocks/offers';
import SETTINGS from './const';

ReactDOM.render(
  <React.StrictMode>
    <App
      cityPlaceArray={SETTINGS.CITY_PLACES}
      offersArray={offersArray}
    />
  </React.StrictMode>,
  document.getElementById('root'));
