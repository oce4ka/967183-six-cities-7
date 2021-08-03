import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureMockStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import {Provider} from 'react-redux';
import PlacecardSortingSelect from './placecard-sorting-select';
import {SortOffersOptions} from '../../const';

const mockStore = configureMockStore({});
let store;
let history = null;

describe('Component: PlacecardSortingSelect', () => {
  beforeEach(() => {
    history = createMemoryHistory();

    store = mockStore({});
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <PlacecardSortingSelect sortingPayload={'Popular'} setSortingPayload={jest.fn}/>
        </Router>
      </Provider>,
    );

    expect(screen.getAllByRole('list')).toHaveLength(1);
    expect(screen.getAllByRole('listitem')).toHaveLength(Object.keys(SortOffersOptions).length);
    expect(container.querySelector('.places__options--opened')).not.toBeInTheDocument();
  });

  it('should show list of sorting options on click', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <PlacecardSortingSelect sortingPayload={'Popular'} setSortingPayload={jest.fn}/>
        </Router>
      </Provider>,
    );

    userEvent.click(container.querySelector('.places__sorting-type'));

    expect(container.querySelector('.places__options--opened')).toBeInTheDocument();
  });
});
