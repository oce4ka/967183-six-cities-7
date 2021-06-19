import React from 'react';
import Header from '../homepage/header';
import PropTypes from 'prop-types';

function Page(props) {
  return (
    <div className={`page ${props.className}`}>
      <Header isUserLoggedIn={props.isUserLoggedIn}/>
      {props.children}
    </div>
  );
}

Page.propTypes = {
  className: PropTypes.string,
  isUserLoggedIn: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Page;
