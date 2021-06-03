/* eslint-disable no-console */

import React from 'react';
import Homepage from '../main/homepage';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login/login';
import Offer from '../offer/offer';
import Favorites from '../favorites/favorites';
import Page404 from '../page404/page404';

function App(props) {
  const {cityPlaceArray} = props;

  App.propTypes = {
    cityPlaceArray: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ),
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/favorites">
          <Favorites/>
        </Route>
        <Route path="/offer/:id">
          <Offer/>
        </Route>
        <Route path="/" exact>
          <Homepage cityPlaceArray={cityPlaceArray}/>
        </Route>

        {/* Just to make NavLinks - cities - work */}
        <Route path="/Paris" component={Homepage}/>
        <Route path="/Cologne" component={Homepage}/>
        <Route path="/Brussels" component={Homepage}/>
        <Route path="/Amsterdam" component={Homepage}/>
        <Route path="/Hamburg" component={Homepage}/>
        <Route path="/Dusseldorf" component={Homepage}/>

        <Route>
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
