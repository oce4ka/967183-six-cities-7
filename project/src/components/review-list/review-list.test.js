import React from 'react';
import {render, screen} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ReviewList from './review-list';

const mockStore = configureMockStore({});
let store;
let reviewsMock;

describe('Component: ReviewList', () => {
  beforeEach(() => {

    reviewsMock = [
      {
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-05-08T14:13:56.569Z',
        'id': 1,
        'rating': 4,
        'user': {
          'avatarUrl': 'img/1.png',
          'id': 4,
          'isPro': false,
          'name': 'Max',
        },
      },
      {
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-05-08T14:13:56.569Z',
        'id': 2,
        'rating': 4,
        'user': {
          'avatarUrl': 'img/1.png',
          'id': 4,
          'isPro': false,
          'name': 'Max',
        },
      },
    ];

    store = mockStore({});
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <ReviewList reviews={reviewsMock}/>
      </Provider>,
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(reviewsMock.length);
    expect(screen.getAllByRole('img')).toHaveLength(reviewsMock.length);
    expect(container.querySelector('.reviews')).toBeInTheDocument();
    expect(container.querySelector('.reviews__list')).toBeInTheDocument();
  });
});
