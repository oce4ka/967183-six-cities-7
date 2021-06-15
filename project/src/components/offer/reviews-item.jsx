import React from 'react';
import convertStarsToPercent from '../../utils/convert-start-to-percent';
import convertIsoDateToStrings from '../../utils/convert-iso-date-to-strings';
import PropTypes from 'prop-types';
import reviewProp from './review.prop';

function ReviewsItem(props) {
  const {reviewsItem} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewsItem.user.avatarUrl} width="54" height="54" alt={reviewsItem.user.name}/>
        </div>
        <span className="reviews__user-name">{reviewsItem.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${convertStarsToPercent(reviewsItem.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewsItem.comment}
        </p>
        <time className="reviews__time" dateTime={convertIsoDateToStrings('YYYY-MM-DD', reviewsItem.date)}>{convertIsoDateToStrings('Month YYYY', reviewsItem.date)}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  reviewsItem: PropTypes.shape(reviewProp),
};

export default ReviewsItem;
