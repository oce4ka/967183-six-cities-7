import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getOffer} from '../../store/offer-data/selectors';
import {addReview} from '../../store/api-actions';
import checkReviewValidation from '../../utils/check-review-validation';
import {Settings} from '../../const';

function ReviewForm() {
  const reviewInitialState = {
    charsCount: 0,
    textReview: '',
    starRating: '5',
  };
  const [review, setReview] = useState(reviewInitialState);

  const currentOffer = useSelector(getOffer).id;

  const dispatch = useDispatch();

  const onSubmit = async (offerId, commentPostObject) => {
    dispatch(addReview(offerId, commentPostObject));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formElements = evt.target.elements;
    for (const formElement of formElements) {
      formElement.readOnly = true;
    }
    const commentPost = {
      comment: review.textReview,
      rating: review.starRating,
    };
    await onSubmit(currentOffer, commentPost);
    setReview(reviewInitialState);
    for (const formElement of formElements) {
      formElement.readOnly = false;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reviews__form form" action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {['5', '4', '3', '2', '1'].map((index) => (
          <React.Fragment key={index}>
            <input onChange={(evt) => {
              setReview({...review, starRating: evt.target.value});
              evt.target.checked = ((review.starRating === evt.target.value.toString()) ? 'checked' : '');
            }} className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`} type="radio" checked={review.starRating === index ? 'checked' : false}
            />
            <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        onChange={(evt) => {
          setReview({...review, charsCount: evt.target.value.length, textReview: evt.target.value});
        }}
        className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        data-testid="reviewTextarea"
        value={review.textReview}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with <b style={(checkReviewValidation(review)) ? {color: 'green'} : {color: 'red'}} className="reviews__text-amount">at least {Settings.MIN_REVIEW_LENGTH} and at most {Settings.MAX_REVIEW_LENGTH} characters</b>.
          <br/>
          You used {review.charsCount} characters.
          <br/>
          <br/>
          <br/>
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={(!checkReviewValidation(review) || !review.starRating) ? 'disabled' : ''}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
