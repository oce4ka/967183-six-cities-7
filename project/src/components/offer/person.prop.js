import PropTypes from 'prop-types';

export default PropTypes.shape({
  'avatar_url': PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  'is_pro': PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;

