import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CITY_PLACES: [0, 1, 2, 3, 4],
};

ReactDOM.render(
  <React.StrictMode>
    <App cityPlaceArray={Setting.CITY_PLACES}/>
  </React.StrictMode>,
  document.getElementById('root'));
