import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AppRoute} from '../../const.js';
import OfferHostInfo from './offer-host-info';

const mockStore = configureStore({});

let history;
let store;
let offerMock;

describe('Component: OfferHostInfo', () => {
  beforeEach(() => {
    offerMock = {
      'bedrooms': 3,
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10,
        },
        'name': 'Amsterdam',
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      'host': {
        'avatarUrl': 'img/1.png',
        'id': 3,
        'isPro': true,
        'name': 'Angelina',
      },
      'id': 1,
      'images': ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png'],
      'isFavorite': false,
      'isPremium': false,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'maxAdults': 4,
      'previewImage': 'img/1.png',
      'price': 120,
      'rating': 4.8,
      'title': 'Beautiful & luxurious studio at great location',
      'type': 'apartment',
    };

    history = createMemoryHistory();
    history.push(AppRoute.FAVORITES);

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
          <OfferHostInfo offer={offerMock}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Meet the host')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(container.querySelector('.property__user-name')).toBeInTheDocument();
    expect(container.querySelector('.property__text')).toBeInTheDocument();
  });
});
