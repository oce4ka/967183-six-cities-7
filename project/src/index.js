import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {checkAuth, fetchOffers, fetchOffersFavorites} from './store/api-actions';
import {AuthorizationStatus} from './const';
import getToken from './utils/get-token';
import {redirect} from './store/middlewares/redirect';
import browserHistory from './browser-history';
import {Router as BrowserRouter} from 'react-router-dom';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

getToken() && store.dispatch(checkAuth());
getToken() && store.dispatch(fetchOffersFavorites());
store.dispatch(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
