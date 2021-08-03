import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AppRoute} from '../../const.js';
import FavoritesInnerContent from './favorites-inner-content';

const mockStore = configureStore({});

let history;
let store;
let offersMock;

describe('Component: FavoritesInnerContent', () => {
  beforeEach(() => {
    offersMock = [
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

    history = createMemoryHistory();
    history.push(AppRoute.FAVORITES);
    store = mockStore({
      USER: {
        authorizationStatus: 'AUTH',
        authInfo: {},
      },
      OFFER: {
        offersFavorites: offersMock,
        isOffersFavoritesLoaded: true,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesInnerContent favoriteOffersArray={offersMock}/>
        </Router>
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getAllByText(/apartment/i)).toHaveLength(5);
  });

  it('should render correct amount of favorite offers', () => {
    expect(screen.getAllByText(/To bookmarks/i)).toHaveLength(5);
  });

  it('when user click on City should redirect to Homepage', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.FAVORITES}>
              <FavoritesInnerContent
                favoriteOffersArray={offersMock}
              />
            </Route>
            <Route exact path={AppRoute.ROOT}><h1>Homepage</h1></Route>
          </Switch>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getAllByRole('link')[0]);

    expect(screen.getByText(/Homepage/i)).toBeInTheDocument();
  });
});
