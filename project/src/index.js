import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import App from './components/app/app';
import offersArray from './mocks/offers';
import {ActionCreator} from './store/action';
import {checkAuth, fetchQuestionList} from './store/api-actions';
import Settings, {AuthorizationStatus} from './const';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchQuestionList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cityPlaceArray={Settings.CITY_PLACES}
        offersArray={offersArray}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
