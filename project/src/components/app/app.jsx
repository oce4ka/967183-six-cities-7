import React from 'react';
import Homepage from '../homepage/homepage';
import PropTypes from 'prop-types';

function App(props) {
  const {cityPlaceArray} = props;

  App.propTypes = {
    cityPlaceArray: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ),
  };

  return <Homepage cityPlaceArray={cityPlaceArray}/>;
}

export default App;
