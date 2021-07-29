import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Page404Screen from './page404-screen';

let history = null;
let store = null;

describe('Component: Page404Screen', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER: {
        authorizationStatus: 'UNKNOWN',
        authInfo: {},
      },
      SEEK: {
        errorText: '',
      },
    });
  });

  it('should render correctly', () => {

    const {getByText, getAllByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Page404Screen/>
        </Router>
      </Provider>,
    );

    const headerElement = getAllByText('404. Not Found.');
    const linkHomeElement = getByText('Return home');
    const linkBackElement = getByText('Return back');

    expect(headerElement).toHaveLength(2);
    expect(linkHomeElement).toBeInTheDocument();
    expect(linkBackElement).toBeInTheDocument();
  });
});
