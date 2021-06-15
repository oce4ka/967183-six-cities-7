import React from 'react';
import reviews from '../../mocks/reviews';
import ReviewsItem from './reviews-item';

function ReviewsList() {
  const reviewsCount = reviews.length;
  return (
    reviewsCount &&
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews.map((reviewsItem) => (
          <ReviewsItem key={reviewsItem.id} reviewsItem={reviewsItem}/>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ReviewsList;
