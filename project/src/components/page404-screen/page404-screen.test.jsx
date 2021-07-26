import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, useHistory, Link} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Page404Screen from './page404-screen';
import {NameSpace} from '../../store/root-reducer';

/*
Todo: Cannot read property 'authorizationStatus' of undefined
Todo: не могу создать тест для какого-либо компонента. Требует провайдер, когда его добавляю таким же образом, как было в лайве, то ругается: TypeError: Cannot read property 'authorizationStatus' of undefined
Todo: помоги плз написать корректный тест
Todo: пример тут: https://github.com/htmlacademy-react/guess-melody-7/pull/8/commits/ed2fb0b3436886bfe70c00f1a048938079cdff98

import LoginScreen from '../login-screen/login-screen';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {user} from '../../store/user/user';
import {NameSpace} from '../../store/root-reducer';

import {combineReducers} from 'redux';
import {offerData} from '../../store/offer-data/offer-data';
import {reviewData} from '../../store/review-data/review-data';
import {seekProcess} from '../../store/seek-process/seek-process';

import ReactDOM from 'react-dom';
//import App from './../app/app';
import rootReducer from './../../store/root-reducer';
import {createAPI} from './../../services/api';
import {requireAuthorization} from './../../store/action';
import {checkAuth, fetchOffers, fetchOffersFavorites} from './../../store/api-actions';
import {AuthorizationStatus} from './../../const';
import getToken from './../../utils/get-token';
import {redirect} from './../../store/middlewares/redirect';
 */

const mockStore = configureStore({});

describe('Component: Page404Screen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Page404Screen/>
        </Router>
      </Provider>
    );

    /*
    const headerElement = getByText('404. Not Found.');
    const linkHomeElement = getByText('Return home');
    const linkBackElement = getByText('Return back');

    expect(headerElement).toBeInTheDocument();
    expect(linkHomeElement).toBeInTheDocument();
    expect(linkBackElement).toBeInTheDocument();
     */
  });
});
