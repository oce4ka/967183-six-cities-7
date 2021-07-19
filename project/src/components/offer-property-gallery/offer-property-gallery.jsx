import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer-screen/offer.prop';
import {MAX_IMAGE_COUNT} from '../../const';

function OfferPropertyGallery(props) {
  const {offer} = props;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.slice(0, MAX_IMAGE_COUNT).map((imageUrl) =>
          (
            <div className="property__image-wrapper" key={imageUrl}>
              <img className="property__image" src={imageUrl} alt={offer.title}/>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

OfferPropertyGallery.propTypes = {
  offer: PropTypes.shape(offerProp),
};

export default React.memo(OfferPropertyGallery);
