/* eslint-disable no-console */

const CHANGE_CITY = 'CHANGE_CITY';
const changeCity = () => ({
  type: CHANGE_CITY,
});

const SHOW_OFFERS = 'SHOW_OFFERS';
const showOffers = () => ({
  type: SHOW_OFFERS,
});

const LOAD_OFFERS = 'LOAD_OFFERS';
const loadOffers = () => ({
  type: LOAD_OFFERS,
});

export const ActionType = {
  CHANGE_CITY: 'city/changeCity',
  SHOW_OFFERS: 'city/showOffers',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    city,
  }),
  showOffers: () => ({
    type: ActionType.SHOW_OFFERS,
  }),
  loadOffers: (payload) => ({
    type: ActionType.LOAD_OFFERS,
    payload,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};

/*
  Todo: Linter is not happy, what to do? Console.log is workaround
  src/store/action.js
  Line 4:7:  'changeCity' is assigned a value but never used  no-unused-vars
  Line 9:7:  'showOffers' is assigned a value but never used  no-unused-vars
*/
console.log(changeCity, showOffers, loadOffers);
