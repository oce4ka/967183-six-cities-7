import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setAuthorizationData, logout} from '../action';
import {AuthorizationStatus} from '../../const';
import convertKeysToCamel from '../../utils/convert-keys-to-camel';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthorizationData, (state, action) => {
      state.authInfo = convertKeysToCamel(action.payload);
      state.authorizationStatus = AuthorizationStatus.AUTH;
    })
    .addCase(logout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.authInfo = {};
    });
});

export {user};
