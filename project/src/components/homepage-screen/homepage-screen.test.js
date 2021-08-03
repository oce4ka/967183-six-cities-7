import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AppRoute} from '../../const.js';
import HomepageScreen from './homepage-screen';

const mockStore = configureStore({});

let history;
let store;

describe('Component: HomepageScreen', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(AppRoute.ROOT);

    store = mockStore({
      USER: {
        authorizationStatus: 'AUTH',
        authInfo: {},
      },
      OFFER: {
        offers: [],
        isOffersLoaded: true,
      },
      SEEK: {
        errorText: 'error',
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <HomepageScreen/>
        </Router>
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(screen.getByText('Cities')).toBeInTheDocument();
  });
});
