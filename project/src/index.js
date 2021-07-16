import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {checkAuth, fetchOfferList} from './store/api-actions';
import {AuthorizationStatus} from './const';
import getToken from './utils/get-token';

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
    }),
});

getToken() && store.dispatch(checkAuth());
store.dispatch(fetchOfferList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
