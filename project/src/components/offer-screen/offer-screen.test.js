import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import OfferScreen from './offer-screen';
import {AppRoute} from '../../const';
import * as Redux from 'react-redux';

const mockStore = configureMockStore({});

let store;
let offerMock;
let history = null;

describe('Component: OfferScreen', () => {
  beforeEach(() => {
    history = createMemoryHistory();

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
    const reviews = [
      {
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-05-08T14:13:56.569Z',
        'id': 1,
        'rating': 4,
        'user': {
          'avatarUrl': 'img/1.png',
          'id': 4,
          'isPro': false,
          'name': 'Max',
        },
      },
      {
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-05-08T14:13:56.569Z',
        'id': 2,
        'rating': 4,
        'user': {
          'avatarUrl': 'img/1.png',
          'id': 4,
          'isPro': false,
          'name': 'Max',
        },
      },
    ];

    store = mockStore({
      USER: {
        authorizationStatus: 'AUTH',
        authInfo: {},
      },
      OFFER: {
        offers: [offerMock],
        isDataLoaded: true,
        offer: offerMock,
        isOfferLoaded: true,
        offersNearby: [offerMock],
        isOffersNearbyLoaded: true,
      },
      REVIEW: {
        reviews: reviews,
        isReviewsLoaded: true,
      },
      SEEK: {
        errorText: '',
      },
    });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    Object.defineProperty(window, 'scrollTo', {value: jest.fn(), writable: true});
  });

  it('should render correctly', () => {
    history.push(AppRoute.OFFER);

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <OfferScreen/>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.page__main--property')).toBeInTheDocument();
    expect(container.querySelector('.property')).toBeInTheDocument();
    expect(container.querySelector('.property__map')).toBeInTheDocument();
    expect(container.querySelector('.near-places')).toBeInTheDocument();
    expect(container.querySelector('.near-places__title')).toBeInTheDocument();
    expect(container.querySelector('.near-places__list')).toBeInTheDocument();
  });
});
