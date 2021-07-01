import {AuthorizationStatus} from '../const';

export const isUserLoggedIn = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.AUTH;
