import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {ErrorMessages} from '../const';
import {
  fetchOffers,
  fetchOffer,
  fetchOffersNearby,
  fetchOffersFavorites,
  setOfferFavoritesStatus,
  fetchReviews,
  addReview,
  login,
  checkAuth,
  logout,
} from './api-actions';
import {APIRoute, AppRoute} from '../const';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {
    });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_DATA,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(200, [{fake: true}]);

    return logoutLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: undefined,
          type: ActionType.LOGOUT,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          payload: undefined,
          type: ActionType.RESET_FAVORITES,
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(1);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'tesjhkhkjt@asdasasd.as', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_DATA,
          payload: [{fake: true}],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersFavoritesLoader = fetchOffersFavorites();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [{fake: true}]);

    return offersFavoritesLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_FAVORITES,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to POST /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentOfferId = 13;
    const status = 1;
    const offersFavoritesLoader = setOfferFavoritesStatus(currentOfferId, status);

    apiMock
      .onPost(APIRoute.FAVORITES_ADD.replace(': hotel_id', currentOfferId).replace(': status', status))
      .reply(200, [{fake: true}]);

    return offersFavoritesLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_OFFER_FAVORITES_STATUS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to GET /offer when it doesnt exist', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentOfferId = 6666;
    const offerLoader = fetchOffer(currentOfferId);

    apiMock
      .onGet(APIRoute.OFFER.replace(': id', currentOfferId))
      .reply(404, {fake: true});

    return offerLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: {},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.PAGE404,
        });
      });
  });

  it('should make a correct API call to GET /offer ', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentOfferId = 10;
    const offerLoader = fetchOffer(currentOfferId);

    apiMock
      .onGet(APIRoute.OFFER.replace(': id', currentOfferId))
      .reply(200, {fake: true});

    return offerLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: {fake: true},
        });
      });
  });

  it('should make a correct API call to GET /hotels/: hotel_id/nearby when it doesnt exist', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentOfferId = 6666;
    const offerNearbyLoader = fetchOffersNearby(currentOfferId);

    apiMock
      .onGet(APIRoute.NEARBY.replace(': hotel_id', currentOfferId))
      .reply(404, [{fake: true}]);

    return offerNearbyLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: [],
          type: ActionType.LOAD_OFFERS_NEARBY,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          payload: ErrorMessages.NEARBY_ERROR,
          type: ActionType.SET_ERROR,
        });
      });
  });

  it('should make a correct API call to GET /hotels/: hotel_id/nearby ', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentOfferId = 10;
    const offerNearbyLoader = fetchOffersNearby(currentOfferId);

    apiMock
      .onGet(APIRoute.NEARBY.replace(': hotel_id', currentOfferId))
      .reply(200, [{fake: true}]);

    return offerNearbyLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to GET /comments/: hotel_id when it doesnt exist', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentOfferId = 6666;
    const offerReviewsLoader = fetchReviews(currentOfferId);

    apiMock
      .onGet(APIRoute.REVIEWS.replace(': hotel_id', currentOfferId))
      .reply(404, [{fake: true}]);

    return offerReviewsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: ErrorMessages.SERVER_ERROR,
          type: ActionType.SET_ERROR,
        });
      });
  });

  it('should make a correct API call to GET /comments/: hotel_id ', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentOfferId = 10;
    const offerReviewsLoader = fetchReviews(currentOfferId);

    apiMock
      .onGet(APIRoute.REVIEWS.replace(': hotel_id', currentOfferId))
      .reply(200, [{fake: true}]);

    return offerReviewsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to POST /comments/: hotel_id ', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentOfferId = 13;
    const addReviewLoader = addReview(currentOfferId);

    apiMock
      .onPost(APIRoute.REVIEWS.replace(': hotel_id', currentOfferId))
      .reply(200, [{fake: true}]);

    return addReviewLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

});
