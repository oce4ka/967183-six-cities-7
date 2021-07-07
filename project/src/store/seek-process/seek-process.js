import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from '../action';
import {Settings} from '../../const';

const initialState = {
  city: Settings.DEFAULT_CITY,
};

const seekProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {seekProcess};
