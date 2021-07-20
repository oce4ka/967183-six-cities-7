import React from 'react';
import ReviewItem from '../review-item/review-item';
import PropTypes from 'prop-types';
import reviewProp from '../review-item/review.prop';
import sortReviews from '../../utils/sort-reviews';
import {Settings} from '../../const';

function ReviewList(props) {
  const {reviews} = props;
  const reviewsCount = reviews.length;

  return (
    !!reviewsCount && // !! - to avoid "0"
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount > Settings.MAX_REVIEWS ? Settings.MAX_REVIEWS : reviewsCount}</span></h2>
      <ul className="reviews__list">
        {sortReviews(reviews).slice(0, Settings.MAX_REVIEWS).map((reviewsItem) => (
          <ReviewItem key={reviewsItem.id} reviewsItem={reviewsItem}/>
        ))}
      </ul>
    </section>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProp)),
};

export default React.memo(ReviewList);
