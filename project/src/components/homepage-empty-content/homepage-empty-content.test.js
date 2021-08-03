import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AppRoute} from '../../const.js';
import HomepageEmptyContent from './homepage-empty-content';

const mockStore = configureStore({});

let history;
let store;

describe('Component: HomepageEmptyContent', () => {
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
          <HomepageEmptyContent/>
        </Router>
      </Provider>,
    );
  });

  it('should render correctly if there is no places received from server', () => {
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment/i)).toBeInTheDocument();
  });
});
