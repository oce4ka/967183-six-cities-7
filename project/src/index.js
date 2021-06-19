import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offersArray from './mocks/offers';
import Settings from './const';

ReactDOM.render(
  <React.StrictMode>
    <App
      cityPlaceArray={Settings.CITY_PLACES}
      offersArray={offersArray}
    />
  </React.StrictMode>,
  document.getElementById('root'));
