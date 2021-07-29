import {user} from './user';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    const state = {authorizationStatus: AuthorizationStatus.UNKNOWN, authInfo: {}};

    const requiredAuthorizationAction = {
      type: undefined,
      payload: undefined,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.UNKNOWN, authInfo: {}});
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: {}};

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, authInfo: {}});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: {}};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: {}});
  });

  it('should log out, update authorizationStatus to "NO_AUTH", remove user info', () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH, authInfo: {id: 1}};

    const logoutAction = {
      type: ActionType.LOGOUT,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, logoutAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: {}});
  });

  it('should set user info, update authorizationStatus', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: {}};

    const logoutAction = {
      type: ActionType.SET_AUTHORIZATION_DATA,
      payload: {name: 'Mark', 'is_pro': false},
    };

    expect(user(state, logoutAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, authInfo: {name: 'Mark', isPro: false}});
  });
});
