import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AppRoute} from '../../const';
import App from './app';
import * as Redux from 'react-redux';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    // Mocks
    const offer = {
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
      'images': ['img/1.png', 'img/2.png'],
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
    const offers = [
      {
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
        'images': ['img/1.png', 'img/2.png'],
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
      },
      {
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
        'id': 2,
        'images': ['img/1.png', 'img/2.png'],
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
      },
      {
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
        'id': 3,
        'images': ['img/1.png', 'img/2.png'],
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
      },
      {
        'bedrooms': 3,
        'city': {
          'location': {
            'latitude': 52.370216,
            'longitude': 4.895168,
            'zoom': 10,
          },
          'name': 'Paris',
        },
        'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
        'host': {
          'avatarUrl': 'img/1.png',
          'id': 3,
          'isPro': true,
          'name': 'Angelina',
        },
        'id': 4,
        'images': ['img/1.png', 'img/2.png'],
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
      },
      {
        'bedrooms': 3,
        'city': {
          'location': {
            'latitude': 52.370216,
            'longitude': 4.895168,
            'zoom': 10,
          },
          'name': 'Paris',
        },
        'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
        'host': {
          'avatarUrl': 'img/1.png',
          'id': 3,
          'isPro': true,
          'name': 'Angelina',
        },
        'id': 5,
        'images': ['img/1.png', 'img/2.png'],
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
      },
    ];
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

    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER: {
        authorizationStatus: 'UNKNOWN',
        authInfo: {},
      },
      REVIEW: {
        reviews: reviews,
        isReviewsLoaded: true,
      },
      SEEK: {
        city: 'Paris',
        errorText: '',
      },
      OFFER: {
        offers: offers,
        isDataLoaded: true,
        offer: offer,
        isOfferLoaded: true,
        offersNearby: offers,
        isOffersNearbyLoaded: true,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      },
    });

    Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
  });

  it('should render "HomepageScreen" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);

    expect(screen.getByText(/2 places to stay in Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });

  it('should render "Offer" when user navigate to "/offer"', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    history.push(AppRoute.OFFER.replace(':id', 1));
    render(fakeApp);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render "LoginScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getAllByText(/Sign in/i)).toHaveLength(3);
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "LoginScreen" when user navigate to /favorites', () => {
    history.push(AppRoute.FAVORITES);
    render(fakeApp);

    expect(screen.getAllByText(/Sign in/i)).toHaveLength(3);
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "Page404Screen" when user navigate to non-existent route', () => {
    history.push('/unknown');
    render(fakeApp);

    expect(screen.getAllByText('404. Not Found.')).toHaveLength(2);
    expect(screen.getByText('Return home')).toBeInTheDocument();
    expect(screen.getByText('Return back')).toBeInTheDocument();
  });
});
