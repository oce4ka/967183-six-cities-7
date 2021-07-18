import React from 'react';
import PropTypes from 'prop-types';

function Main(props) {
  return (
    <main className={`page__main ${props.className}`}>
      {props.children}
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Main;
