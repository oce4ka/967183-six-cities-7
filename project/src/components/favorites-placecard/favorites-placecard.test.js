import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FavoritesPlacecard from './favorites-placecard';
import {AppRoute} from '../../const.js';

const mockStore = configureStore({});

let history;
let store;
let offerMock;

describe('Component: FavoritesInnerContent', () => {
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

    history = createMemoryHistory();
    history.push(AppRoute.FAVORITES);
    store = mockStore({
      USER: {
        authorizationStatus: 'AUTH',
        authInfo: {},
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesPlacecard offer={offerMock}/>
        </Router>
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('should render correct amount of links in a PlaceCard', () => {
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('when user click on a link should redirect to Offer', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.FAVORITES}>
              <FavoritesPlacecard
                offer={offerMock}
              />
            </Route>
            <Route exact path={AppRoute.OFFER}><h1>One offer</h1></Route>
          </Switch>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getAllByRole('link')[0]);

    expect(screen.getByText(/One offer/i)).toBeInTheDocument();
  });
});
