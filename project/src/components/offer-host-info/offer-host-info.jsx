import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer-screen/offer.prop';

function OfferHostInfo(props) {
  const {offer} = props;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper user__avatar-wrapper ${offer.host.isPro && 'property__avatar-wrapper--pro'}`}>
          <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt={offer.host.name}/>
        </div>
        <span className="property__user-name">{offer.host.name}</span>
        {offer.host.isPro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="property__description">
        <p className="property__text">
          {offer.description}
        </p>
      </div>
    </div>
  );
}

OfferHostInfo.propTypes = {
  offer: PropTypes.shape(offerProp),
};

export default React.memo(OfferHostInfo);
