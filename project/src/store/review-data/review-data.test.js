import {loadReviews} from '../action';
import {reviewData} from './review-data';

describe('Reducer: reviewData', () => {
  it('without additional parameters should return the initial state', () => {
    expect(reviewData(undefined, {}))
      .toEqual({
        reviews: [],
        isReviewsLoaded: false,
      });
  });

  it('should change reviews by a given value', () => {
    const state = {
      reviews: [],
      isReviewsLoaded: false,
    };

    const reviews = [
      {
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-05-08T14:13:56.569Z',
        'id': 1,
        'rating': 4,
        'user': {
          'avatar_url': 'img/1.png',
          'id': 4,
          'is_pro': false,
          'name': 'Max',
        },
      },
      {
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-05-08T14:13:56.569Z',
        'id': 1,
        'rating': 4,
        'user': {
          'avatar_url': 'img/1.png',
          'id': 4,
          'is_pro': false,
          'name': 'Max',
        },
      },
    ];

    const reviewsToCamel = [
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
        'id': 1,
        'rating': 4,
        'user': {
          'avatarUrl': 'img/1.png',
          'id': 4,
          'isPro': false,
          'name': 'Max',
        },
      },
    ];

    expect(reviewData(state, loadReviews(reviews)))
      .toEqual({
        reviews: reviewsToCamel,
        isReviewsLoaded: true,
      });

    expect(reviewData(state, loadReviews([])))
      .toEqual({
        reviews: [],
        isReviewsLoaded: true,
      });
  });
});
