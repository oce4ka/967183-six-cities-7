import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginScreen from './login-screen';
import {AppRoute} from '../../const';

let history = null;
let store = null;

describe('Component: LoginScreen', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER: {
        authorizationStatus: "UNKNOWN",
        authInfo: {}
      },
      SEEK: {
        errorText: '',
      },
    });
  });

  it('should render "LoginScreen" when user navigate to "login" url', () => {
    history.push(AppRoute.LOGIN);

    render(
      <Provider store={store}>
        <Router history={history}>
          <LoginScreen/>
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText(/Sign in/i)).toHaveLength(3);
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'oce4ka@gmail.com');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/oce4ka@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
