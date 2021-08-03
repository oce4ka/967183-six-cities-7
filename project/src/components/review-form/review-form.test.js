import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import ReviewForm from './review-form';
import {AppRoute} from '../../const';

let history = null;
let store = null;

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

describe('Component: ReviewForm', () => {
  beforeAll(() => {
    history = createMemoryHistory();

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
  });

  it('should render "ReviewForm" correctly when user navigate to "offer" url', () => {
    history.push(AppRoute.OFFER);

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(container.querySelector('.form__rating-input')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should type when user fills the form', () => {
    history.push(AppRoute.OFFER);

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm/>
        </Router>
      </Provider>,
    );

    expect(screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId('reviewTextarea'), 'Bla bla bla');
    expect(screen.getByDisplayValue(/Bla bla bla/i)).toBeInTheDocument();
  });

  it('should show disabled button when user writes less than minimum amount of symbols', () => {
    history.push(AppRoute.OFFER);

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm/>
        </Router>
      </Provider>,
    );

    userEvent.type(screen.getByTestId('reviewTextarea'), 'Bla bla bla');
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });

  it('should show disabled button when user writes more than minimum amount of symbols', () => {
    history.push(AppRoute.OFFER);

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm/>
        </Router>
      </Provider>,
    );

    userEvent.type(screen.getByTestId('reviewTextarea'), 'Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla');
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });
});
