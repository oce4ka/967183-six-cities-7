import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Page from './page';

const mockStore = configureMockStore({});
let store;
let history = null;

describe('Component: Page', () => {
  beforeEach(() => {
    history = createMemoryHistory();

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
        errorText: '',
      },
    });
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Page><div>Hello world</div></Page>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.page')).toBeInTheDocument();
  });
});
