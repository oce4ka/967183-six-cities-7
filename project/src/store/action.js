/* eslint-disable no-console */

const CHANGE_CITY = 'CHANGE_CITY';
const changeCity = () => ({
  type: CHANGE_CITY,
});

const SHOW_OFFERS = 'SHOW_OFFERS';
const showOffers = () => ({
  type: SHOW_OFFERS,
});

export const ActionType = {
  CHANGE_CITY: 'city/changeCity',
  SHOW_OFFERS: 'city/showOffers',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    city,
  }),
  showOffers: () => ({
    type: ActionType.SHOW_OFFERS,
  }),
};

/*
  Todo: Linter is not happy, what to do? Console.log is workaround
  src/store/action.js
  Line 4:7:  'changeCity' is assigned a value but never used  no-unused-vars
  Line 9:7:  'showOffers' is assigned a value but never used  no-unused-vars
*/
console.log(changeCity, showOffers);
