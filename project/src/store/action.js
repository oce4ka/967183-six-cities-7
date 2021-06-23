/* eslint-disable no-unused-vars */
/* Todo: resolve errors with unused vars? which are needed actually */

const CHANGE_CITY = 'CHANGE_CITY';
const changeCity = () => ({
  type: CHANGE_CITY,
});

const LOAD_OFFERS = 'LOAD_OFFERS';
const loadOffers = () => ({
  type: LOAD_OFFERS,
});

export const ActionType = {
  CHANGE_CITY: 'city/changeCity',
  LOAD_OFFERS: 'data/loadOffers',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    city,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
};
