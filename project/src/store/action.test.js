import {
  changeCity,
  loadOffers,
  loadOffer,
  loadOffersNearby,
  loadOffersFavorites,
  changeOfferIsFavoriteStatus,
  resetFavorites,
  loadReviews,
  requireAuthorization,
  setAuthorizationData,
  logout,
  redirectToRoute,
  setError,
  resetError,
  ActionType
} from './action';

describe('Actions', () => {
  it('action creator for changing city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Amsterdam',
    };

    const city = 'Amsterdam';

    expect(changeCity(city)).toEqual(expectedAction);
  });

  it('action creator for loading array of offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: [
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
            'avatar_url': 'img/1.png',
            'id': 3,
            'is_pro': true,
            'name': 'Angelina',
          },
          'id': 1,
          'images': ['img/1.png', 'img/2.png'],
          'is_favorite': false,
          'is_premium': false,
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8,
          },
          'max_adults': 4,
          'preview_image': 'img/1.png',
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
            'avatar_url': 'img/1.png',
            'id': 3,
            'is_pro': true,
            'name': 'Angelina',
          },
          'id': 1,
          'images': ['img/1.png', 'img/2.png'],
          'is_favorite': false,
          'is_premium': false,
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8,
          },
          'max_adults': 4,
          'preview_image': 'img/1.png',
          'price': 120,
          'rating': 4.8,
          'title': 'Beautiful & luxurious studio at great location',
          'type': 'apartment',
        },
      ],
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
          'avatar_url': 'img/1.png',
          'id': 3,
          'is_pro': true,
          'name': 'Angelina',
        },
        'id': 1,
        'images': ['img/1.png', 'img/2.png'],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8,
        },
        'max_adults': 4,
        'preview_image': 'img/1.png',
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
          'avatar_url': 'img/1.png',
          'id': 3,
          'is_pro': true,
          'name': 'Angelina',
        },
        'id': 1,
        'images': ['img/1.png', 'img/2.png'],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8,
        },
        'max_adults': 4,
        'preview_image': 'img/1.png',
        'price': 120,
        'rating': 4.8,
        'title': 'Beautiful & luxurious studio at great location',
        'type': 'apartment',
      },
    ];

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for loading object of current offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: {
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
          'avatar_url': 'img/1.png',
          'id': 3,
          'is_pro': true,
          'name': 'Angelina',
        },
        'id': 1,
        'images': ['img/1.png', 'img/2.png'],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8,
        },
        'max_adults': 4,
        'preview_image': 'img/1.png',
        'price': 120,
        'rating': 4.8,
        'title': 'Beautiful & luxurious studio at great location',
        'type': 'apartment',
      },
    };

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
        'avatar_url': 'img/1.png',
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 1,
      'images': ['img/1.png', 'img/2.png'],
      'is_favorite': false,
      'is_premium': false,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/1.png',
      'price': 120,
      'rating': 4.8,
      'title': 'Beautiful & luxurious studio at great location',
      'type': 'apartment',
    };

    expect(loadOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for changing array of nearby offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: [
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
            'avatar_url': 'img/1.png',
            'id': 3,
            'is_pro': true,
            'name': 'Angelina',
          },
          'id': 1,
          'images': ['img/1.png', 'img/2.png'],
          'is_favorite': false,
          'is_premium': false,
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8,
          },
          'max_adults': 4,
          'preview_image': 'img/1.png',
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
            'avatar_url': 'img/1.png',
            'id': 3,
            'is_pro': true,
            'name': 'Angelina',
          },
          'id': 1,
          'images': ['img/1.png', 'img/2.png'],
          'is_favorite': false,
          'is_premium': false,
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8,
          },
          'max_adults': 4,
          'preview_image': 'img/1.png',
          'price': 120,
          'rating': 4.8,
          'title': 'Beautiful & luxurious studio at great location',
          'type': 'apartment',
        },
      ],
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
          'avatar_url': 'img/1.png',
          'id': 3,
          'is_pro': true,
          'name': 'Angelina',
        },
        'id': 1,
        'images': ['img/1.png', 'img/2.png'],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8,
        },
        'max_adults': 4,
        'preview_image': 'img/1.png',
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
          'avatar_url': 'img/1.png',
          'id': 3,
          'is_pro': true,
          'name': 'Angelina',
        },
        'id': 1,
        'images': ['img/1.png', 'img/2.png'],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8,
        },
        'max_adults': 4,
        'preview_image': 'img/1.png',
        'price': 120,
        'rating': 4.8,
        'title': 'Beautiful & luxurious studio at great location',
        'type': 'apartment',
      },
    ];

    expect(loadOffersNearby(offers)).toEqual(expectedAction);
  });

  it('action creator for changing array of favorite offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_FAVORITES,
      payload: [
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
            'avatar_url': 'img/1.png',
            'id': 3,
            'is_pro': true,
            'name': 'Angelina',
          },
          'id': 1,
          'images': ['img/1.png', 'img/2.png'],
          'is_favorite': false,
          'is_premium': false,
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8,
          },
          'max_adults': 4,
          'preview_image': 'img/1.png',
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
            'avatar_url': 'img/1.png',
            'id': 3,
            'is_pro': true,
            'name': 'Angelina',
          },
          'id': 1,
          'images': ['img/1.png', 'img/2.png'],
          'is_favorite': false,
          'is_premium': false,
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8,
          },
          'max_adults': 4,
          'preview_image': 'img/1.png',
          'price': 120,
          'rating': 4.8,
          'title': 'Beautiful & luxurious studio at great location',
          'type': 'apartment',
        },
      ],
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
          'avatar_url': 'img/1.png',
          'id': 3,
          'is_pro': true,
          'name': 'Angelina',
        },
        'id': 1,
        'images': ['img/1.png', 'img/2.png'],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8,
        },
        'max_adults': 4,
        'preview_image': 'img/1.png',
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
          'avatar_url': 'img/1.png',
          'id': 3,
          'is_pro': true,
          'name': 'Angelina',
        },
        'id': 1,
        'images': ['img/1.png', 'img/2.png'],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8,
        },
        'max_adults': 4,
        'preview_image': 'img/1.png',
        'price': 120,
        'rating': 4.8,
        'title': 'Beautiful & luxurious studio at great location',
        'type': 'apartment',
      },
    ];

    expect(loadOffersFavorites(offers)).toEqual(expectedAction);
  });

  it('action creator for changing favorites status for the offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_OFFER_FAVORITES_STATUS,
      payload: {
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
          'avatar_url': 'img/1.png',
          'id': 3,
          'is_pro': true,
          'name': 'Angelina',
        },
        'id': 1,
        'images': ['img/1.png', 'img/2.png'],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8,
        },
        'max_adults': 4,
        'preview_image': 'img/1.png',
        'price': 120,
        'rating': 4.8,
        'title': 'Beautiful & luxurious studio at great location',
        'type': 'apartment',
      },
    };

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
        'avatar_url': 'img/1.png',
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 1,
      'images': ['img/1.png', 'img/2.png'],
      'is_favorite': false,
      'is_premium': false,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/1.png',
      'price': 120,
      'rating': 4.8,
      'title': 'Beautiful & luxurious studio at great location',
      'type': 'apartment',
    };

    expect(changeOfferIsFavoriteStatus(offer)).toEqual(expectedAction);
  });

  it('action creator for reset array of favorites returns correct action', () => {
    const expectedAction = {
      type: ActionType.RESET_FAVORITES,
    };

    expect(resetFavorites()).toEqual(expectedAction);
  });

  it('action creator for changing array of reviews returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: [{
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-05-08T14:13:56.569Z',
        'id': 1,
        'rating': 4,
        'user': {
          'avatar_url': 'img/1.png',
          'id': 4,
          'is_pro': false,
          'name': 'Max',
        },
      }, {
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-05-08T14:13:56.569Z',
        'id': 1,
        'rating': 4,
        'user': {
          'avatar_url': 'img/1.png',
          'id': 4,
          'is_pro': false,
          'name': 'Max',
        },
      }],
    };

    const reviews = [{
      'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'date': '2019-05-08T14:13:56.569Z',
      'id': 1,
      'rating': 4,
      'user': {
        'avatar_url': 'img/1.png',
        'id': 4,
        'is_pro': false,
        'name': 'Max',
      },
    }, {
      'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'date': '2019-05-08T14:13:56.569Z',
      'id': 1,
      'rating': 4,
      'user': {
        'avatar_url': 'img/1.png',
        'id': 4,
        'is_pro': false,
        'name': 'Max',
      },
    }];

    expect(loadReviews(reviews)).toEqual(expectedAction);
  });

  it('action creator for changing authorization status returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    const status = 'AUTH';

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('action creator for setting authorization data returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION_DATA,
      payload: {
        id: 1,
        email: 'asdasd@asddas.as',
        name: 'asdasd',
        avatarUrl: 'https://7.react.pages.academy/static/avatar/5.jpg',
        isPro: false,
        token: 'YXNkYXNkQGFzZGRhcy5hcw==',
      },
    };

    const data = {
      id: 1,
      email: 'asdasd@asddas.as',
      name: 'asdasd',
      avatarUrl: 'https://7.react.pages.academy/static/avatar/5.jpg',
      isPro: false,
      token: 'YXNkYXNkQGFzZGRhcy5hcw==',
    };

    expect(setAuthorizationData(data)).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirect returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/login',
    };

    const url = '/login';

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('action creator for setting error returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_ERROR,
      payload: '404',
    };

    const data = '404';

    expect(setError(data)).toEqual(expectedAction);
  });

  it('action creator for resetting error returns correct action', () => {
    const expectedAction = {
      type: ActionType.RESET_ERROR,
    };

    expect(resetError()).toEqual(expectedAction);
  });
});
