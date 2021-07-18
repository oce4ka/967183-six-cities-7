import PropTypes from 'prop-types';
import personProp from '../offer-host-info/person.prop';

export default PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({personProp}).isRequired,
}).isRequired;

