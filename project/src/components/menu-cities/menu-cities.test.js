import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MenuCities from './menu-cities';

const mockStore = configureStore({});

let store;

const clickCityHandle = jest.fn();

describe('Component: MenuCities', () => {
  beforeEach(() => {
    store = mockStore({
      USER: {
        authorizationStatus: 'AUTH',
        authInfo: {},
      },
      OFFER: {
        offers: [],
        isOffersLoaded: true,
      },
      SEEK: {
        errorText: '',
      },
    });

    render(
      <Provider store={store}>
        <MenuCities cityPlaceArray={['Amsterdam', 'Paris']} currentCity={'Amsterdam'} onChangeCity={clickCityHandle}/>
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByText('Paris')).toBeInTheDocument();
  });


  it('when user clicks city, onChangeCity should be called', () => {
    userEvent.click(screen.getAllByRole('link')[0]);
    expect(clickCityHandle).toBeCalled();
  });
});
