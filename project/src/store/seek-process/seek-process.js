import {ActionType} from '../action';
import {Settings} from '../../const';

const initialState = {
  city: Settings.DEFAULT_CITY,
};

const seekProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.city,
      };
    default:
      return state;
  }
};

export {seekProcess};
