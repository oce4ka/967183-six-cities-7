import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FavoritesEmptyContent from './favorites-empty-content';
import {AppRoute} from '../../const.js';

const mockStore = configureStore({});

let history;
let store;

describe('Component: FavoritesEmptyContent', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(AppRoute.FAVORITES);
    store = mockStore({
      USER: {
        authorizationStatus: 'AUTH',
        authInfo: {},
      },
      OFFER: {
        offersFavorites: [],
        isOffersFavoritesLoaded: true,
      },
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesEmptyContent/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });
});
