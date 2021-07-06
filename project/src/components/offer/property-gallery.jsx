import React from 'react';
import PropTypes from 'prop-types';
import offerProp from './offer.prop';

function PropertyGallery(props) {
  const {offer} = props;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.map((imageUrl) =>
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

PropertyGallery.propTypes = {
  offer: PropTypes.shape(offerProp),
};

export default React.memo(PropertyGallery);
