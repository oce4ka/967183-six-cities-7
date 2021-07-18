import React from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';

function Page(props) {
  return (
    <div className={`page ${props.className}`}>
      <Header/>
      {props.children}
    </div>
  );
}

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Page;
