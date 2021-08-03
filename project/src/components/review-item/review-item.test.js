import React from 'react';
import {render, screen} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ReviewItem from './review-item';

const mockStore = configureMockStore({});
let store;
let reviewMock;

describe('Component: ReviewItem', () => {
  beforeEach(() => {
    reviewMock = {
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
    };

    store = mockStore({});
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <ReviewItem reviewsItem={reviewMock}/>
      </Provider>,
    );

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(container.querySelector('.reviews__avatar')).toBeInTheDocument();
    expect(container.querySelector('.reviews__user-name')).toBeInTheDocument();
    expect(container.querySelector('.reviews__rating')).toBeInTheDocument();
    expect(container.querySelector('.reviews__text')).toBeInTheDocument();
    expect(container.querySelector('.reviews__time')).toBeInTheDocument();
  });

  it('should show correct date format', () => {
    render(
      <Provider store={store}>
        <ReviewItem reviewsItem={reviewMock}/>
      </Provider>,
    );

    expect(screen.getByText('May 2019')).toBeInTheDocument();
  });
});
