import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.SEEK].city;
export const getErrorMessage = (state) => state[NameSpace.SEEK].errorText;
