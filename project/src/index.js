import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import Settings from './const';
import {reducer} from './store/reducer';

import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {fetchOfferList} from './store/api-actions';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization('NO_AUTH')),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(fetchOfferList());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cityPlaceArray={Settings.CITY_PLACES}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
