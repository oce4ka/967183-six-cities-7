import React from 'react';
import Homepage from '../homepage/homepage';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login/login';
import Offer from '../offer/offer';
import Favorites from '../favorites/favorites';
import Page404 from '../page404/page404';
import offerProp from '../offer/offer.prop';

function App(props) {
  const {cityPlaceArray, offersArray} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/favorites">
          <Favorites offersArray={offersArray}/>
        </Route>
        <Route path="/offer/:id">
          <Offer offersArray={offersArray}/>
        </Route>
        <Route path="/" exact>
          <Homepage
            cityPlaceArray={cityPlaceArray}
            offersArray={offersArray}
          />
        </Route>

        {cityPlaceArray.map((cityPlace) => (
          <Route key={cityPlace} path={`/${cityPlace}`}>
            <Homepage
              cityPlaceArray={cityPlaceArray}
              currentCity={cityPlace}
              offersArray={offersArray}
            />
          </Route>
        ))}

        <Route>
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cityPlaceArray: PropTypes.arrayOf(PropTypes.string),
  offersArray: PropTypes.arrayOf(
    offerProp,
  ),
};

export default App;
