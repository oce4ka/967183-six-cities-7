import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Main from './main';

const mockStore = configureStore({});

let store;

describe('Component: Main', () => {
  beforeEach(() => {
    store = mockStore({});

    render(
      <Provider store={store}>
        <Main>
          <div/>
        </Main>
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
