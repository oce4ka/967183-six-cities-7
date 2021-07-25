import {seekProcess} from './seek-process';
import {ActionType, changeCity, setError} from '../action';
import {Settings} from '../../const';

describe('Reducer: seekProcess', () => {
  it('without additional parameters should return the initial state', () => {
    expect(seekProcess(undefined, {}))
      .toEqual({
        city: Settings.DEFAULT_CITY,
        errorText: '',
      });
  });

  it('should change city by a given value', () => {
    const state = {
      city: Settings.DEFAULT_CITY,
      errorText: '',
    };

    expect(seekProcess(state, changeCity('Amsterdam')))
      .toEqual({
        city: 'Amsterdam',
        errorText: '',
      });

    const changeAnotherCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris'
    };

    expect(seekProcess(state, changeAnotherCityAction))
      .toEqual({
        city: 'Paris',
        errorText: '',
      });
  });

  it('should set an error', () => {
    expect(seekProcess({city: 'Paris', errorText: ''}, setError('Authentication error. Please, try again.')))
      .toEqual({city: 'Paris', errorText: 'Authentication error. Please, try again.'});

    expect(seekProcess({city: 'Paris', errorText: '500'}, setError('404')))
      .toEqual({city: 'Paris', errorText: '404'});

    expect(seekProcess({city: 'Amsterdam', errorText: 'Hello'}, setError('Authentication error. Please, try again.')))
      .toEqual({city: 'Amsterdam', errorText: 'Authentication error. Please, try again.'});
  });

  it('should have reset an error', () => {
    const resetErrorAction = {
      type: ActionType.RESET_ERROR,
      payload: null,
    };

    expect(seekProcess({city: 'Paris', errorText: '404'}, resetErrorAction))
      .toEqual({city: 'Paris', errorText: ''});

    expect(seekProcess({city: 'Paris', errorText: '500'}, resetErrorAction))
      .toEqual({city: 'Paris', errorText: ''});

    expect(seekProcess({city: 'Amsterdam', errorText: ''}, resetErrorAction))
      .toEqual({city: 'Amsterdam', errorText: ''});
  });
});
