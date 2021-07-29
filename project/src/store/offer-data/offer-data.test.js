import {loadOffers, loadOffersNearby, loadOffer, loadOffersFavorites, resetFavorites, changeOfferIsFavoriteStatus} from '../action';
import {offerData} from './offer-data';

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
    'id': 2,
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

const offersToCamel = [
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
];

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

const offerToCamel = {
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

describe('Reducer: offerData', () => {
  it('without additional parameters should return the initial state', () => {
    expect(offerData(undefined, {}))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: {},
        isOfferLoaded: false,
        offersNearby: [],
        isOffersNearbyLoaded: false,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      });
  });

  it('should change offers array by a given value', () => {
    const state = {
      offers: [],
      isDataLoaded: false,
      offer: {},
      isOfferLoaded: false,
      offersNearby: [],
      isOffersNearbyLoaded: false,
      offersFavorites: [],
      isOffersFavoritesLoaded: false,
    };

    expect(offerData(state, loadOffers(offers)))
      .toEqual({
        offers: offersToCamel,
        isDataLoaded: true,
        offer: {},
        isOfferLoaded: false,
        offersNearby: [],
        isOffersNearbyLoaded: false,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      });

    expect(offerData(state, loadOffers([])))
      .toEqual({
        offers: [],
        isDataLoaded: true,
        offer: {},
        isOfferLoaded: false,
        offersNearby: [],
        isOffersNearbyLoaded: false,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      });
  });

  it('should change nearby offers array by a given value', () => {
    const state = {
      offers: [],
      isDataLoaded: false,
      offer: {},
      isOfferLoaded: false,
      offersNearby: [],
      isOffersNearbyLoaded: false,
      offersFavorites: [],
      isOffersFavoritesLoaded: false,
    };

    expect(offerData(state, loadOffersNearby(offers)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: {},
        isOfferLoaded: false,
        offersNearby: offersToCamel,
        isOffersNearbyLoaded: true,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      });

    expect(offerData(state, loadOffersNearby([])))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: {},
        isOfferLoaded: false,
        offersNearby: [],
        isOffersNearbyLoaded: true,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      });
  });

  it('should change offer object by a given value', () => {
    const state = {
      offers: [],
      isDataLoaded: false,
      offer: {},
      isOfferLoaded: false,
      offersNearby: [],
      isOffersNearbyLoaded: false,
      offersFavorites: [],
      isOffersFavoritesLoaded: false,
    };

    expect(offerData(state, loadOffer(offer)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: offerToCamel,
        isOfferLoaded: true,
        offersNearby: [],
        isOffersNearbyLoaded: false,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      });

    expect(offerData(state, loadOffer({})))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: {},
        isOfferLoaded: true,
        offersNearby: [],
        isOffersNearbyLoaded: false,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      });
  });

  it('should change favorite offers array by a given value', () => {
    const state = {
      offers: [],
      isDataLoaded: false,
      offer: {},
      isOfferLoaded: false,
      offersNearby: [],
      isOffersNearbyLoaded: false,
      offersFavorites: [],
      isOffersFavoritesLoaded: false,
    };

    expect(offerData(state, loadOffersFavorites(offers)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: {},
        isOfferLoaded: false,
        offersNearby: [],
        isOffersNearbyLoaded: false,
        offersFavorites: offersToCamel,
        isOffersFavoritesLoaded: true,
      });

    expect(offerData(state, loadOffersFavorites([])))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: {},
        isOfferLoaded: false,
        offersNearby: [],
        isOffersNearbyLoaded: false,
        offersFavorites: [],
        isOffersFavoritesLoaded: true,
      });
  });

  it('should remove favorite offers array', () => {
    const state = {
      offers: [],
      isDataLoaded: false,
      offer: {},
      isOfferLoaded: false,
      offersNearby: [],
      isOffersNearbyLoaded: false,
      offersFavorites: offersToCamel,
      isOffersFavoritesLoaded: true,
    };

    expect(offerData(state, resetFavorites()))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: {},
        isOfferLoaded: false,
        offersNearby: [],
        isOffersNearbyLoaded: false,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      });

    expect(offerData(state, resetFavorites(offers)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: {},
        isOfferLoaded: false,
        offersNearby: [],
        isOffersNearbyLoaded: false,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      });

    expect(offerData(state, resetFavorites(offersToCamel)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: {},
        isOfferLoaded: false,
        offersNearby: [],
        isOffersNearbyLoaded: false,
        offersFavorites: [],
        isOffersFavoritesLoaded: false,
      });
  });

  it('should add an offer to favorites: update offer object, offers array, favorites array, nearby array', () => {

    const simpleOffers = [
      {
        id: 1,
        isFavorite: false,
      },
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 3,
        isFavorite: true,
      },
      {
        id: 4,
        isFavorite: false,
      },
    ];

    const simpleOffersUpdated = [
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 3,
        isFavorite: true,
      },
      {
        id: 4,
        isFavorite: false,
      },
    ];

    const simpleOffersFavorites = [
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 3,
        isFavorite: true,
      },
    ];

    const simpleOffersFavoritesUpdated = [
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 3,
        isFavorite: true,
      },
      {
        id: 1,
        isFavorite: true,
      },
    ];

    const simpleOffersNearby = [
      {
        id: 1,
        isFavorite: false,
      },
      {
        id: 2,
        isFavorite: true,
      },
    ];

    const simpleOffersNearbyUpdated = [
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
    ];

    const simpleOffer = {
      id: 1,
      isFavorite: false,
    };

    const simpleOfferUpdated = {
      id: 1,
      'is_favorite': true,
    };

    const simpleOfferUpdatedToCamel = {
      id: 1,
      isFavorite: true,
    };

    const state = {
      offers: simpleOffers,
      isDataLoaded: true,
      offer: simpleOffer,
      isOfferLoaded: true,
      offersNearby: simpleOffersNearby,
      isOffersNearbyLoaded: true,
      offersFavorites: simpleOffersFavorites,
      isOffersFavoritesLoaded: true,
    };

    expect(offerData(state, changeOfferIsFavoriteStatus(simpleOfferUpdated)))
      .toEqual({
        offers: simpleOffersUpdated,
        isDataLoaded: true,
        offer: simpleOfferUpdatedToCamel,
        isOfferLoaded: true,
        offersNearby: simpleOffersNearbyUpdated,
        isOffersNearbyLoaded: true,
        offersFavorites: simpleOffersFavoritesUpdated,
        isOffersFavoritesLoaded: true,
      });

  });

  it('should remove an offer from favorites: update offer object, offers array, favorites array, nearby array', () => {

    const simpleOffers = [
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 3,
        isFavorite: true,
      },
      {
        id: 4,
        isFavorite: false,
      },
    ];

    const simpleOffersUpdated = [
      {
        id: 1,
        isFavorite: false,
      },
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 3,
        isFavorite: true,
      },
      {
        id: 4,
        isFavorite: false,
      },
    ];

    const simpleOffersFavorites = [
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 3,
        isFavorite: true,
      },
    ];

    const simpleOffersFavoritesUpdated = [
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 3,
        isFavorite: true,
      },
    ];

    const simpleOffersNearby = [
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
    ];

    const simpleOffersNearbyUpdated = [
      {
        id: 1,
        isFavorite: false,
      },
      {
        id: 2,
        isFavorite: true,
      },
    ];

    const simpleOffer = {
      id: 1,
      isFavorite: true,
    };

    const simpleOfferUpdated = {
      id: 1,
      'is_favorite': false,
    };

    const simpleOfferUpdatedToCamel = {
      id: 1,
      isFavorite: false,
    };

    const state = {
      offers: simpleOffers,
      isDataLoaded: true,
      offer: simpleOffer,
      isOfferLoaded: true,
      offersNearby: simpleOffersNearby,
      isOffersNearbyLoaded: true,
      offersFavorites: simpleOffersFavorites,
      isOffersFavoritesLoaded: true,
    };

    expect(offerData(state, changeOfferIsFavoriteStatus(simpleOfferUpdated)))
      .toEqual({
        offers: simpleOffersUpdated,
        isDataLoaded: true,
        offer: simpleOfferUpdatedToCamel,
        isOfferLoaded: true,
        offersNearby: simpleOffersNearbyUpdated,
        isOffersNearbyLoaded: true,
        offersFavorites: simpleOffersFavoritesUpdated,
        isOffersFavoritesLoaded: true,
      });

  });
});
