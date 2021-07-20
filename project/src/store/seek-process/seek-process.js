import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setError, resetError} from '../action';
import {Settings} from '../../const';

const initialState = {
  city: Settings.DEFAULT_CITY,
  errorText: '',
};

const seekProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.errorText = action.payload;
    })
    .addCase(resetError, (state, action) => {
      state.errorText = '';
    });
});

export {seekProcess};
