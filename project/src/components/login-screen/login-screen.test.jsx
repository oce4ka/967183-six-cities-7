import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginScreen from './login-screen';

import {useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import Page from '../page/page';
import Main from '../main/main';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import {Redirect} from 'react-router-dom';
import {AppRoute} from '../../const';
import {isUserLoggedIn} from '../../utils/check-auth';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getErrorMessage} from '../../store/seek-process/selectors';
import {changeCity} from '../../store/action';
import {validateAuth} from '../../utils/validate-auth';

/*
Todo: Cannot read property 'authorizationStatus' of undefined
Todo: не могу создать тест для какого-либо компонента. Требует провайдер, когда его добавляю таким же образом, как было в лайве, то ругается: TypeError: Cannot read property 'authorizationStatus' of undefined
Todo: помоги плз написать корректный тест
Todo: пример тут: https://github.com/htmlacademy-react/guess-melody-7/pull/8/commits/ed2fb0b3436886bfe70c00f1a048938079cdff98

 */

const mockStore = configureStore({});


describe('Component: LoginScreen', () => {
  it('should render "LoginScreen" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <LoginScreen/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Сыграть ещё раз/i)).toBeInTheDocument();
    expect(screen.getByText(/Хотите узнать свой результат\? Представьтесь!/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Логин/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Пароль/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'keks');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
