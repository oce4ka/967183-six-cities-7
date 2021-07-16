import React, {useState} from 'react';
import PropTypes from 'prop-types';

function FormReview(props) {
  const {onAnswer} = props;
  const [review, setReview] = useState({
    charsCount: 0,
    textReview: '',
    starRaiting: 0,
  });
  const {charsCount, textReview, starRaiting} = review;

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onAnswer();
      }}
      className="reviews__form form" action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={(evt) => {
          setReview({...review, starRaiting: evt.target.value});
        }} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={(evt) => {
          setReview({...review, starRaiting: evt.target.value});
        }} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={(evt) => {
          setReview({...review, starRaiting: evt.target.value});
        }} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={(evt) => {
          setReview({...review, starRaiting: evt.target.value});
        }} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={(evt) => {
          setReview({...review, starRaiting: evt.target.value});
        }} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        onChange={(evt) => {
          setReview({...review, charsCount: evt.target.value.length, textReview: evt.target.value});
        }}
        className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          <br/>
          You used {charsCount} characters
          <br/>
          Text: {textReview}
          <br/>
          Star rating: {starRaiting}
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

FormReview.propTypes = {
  onAnswer: PropTypes.func.isRequired,
};

export default React.memo(FormReview);
