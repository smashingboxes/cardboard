import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

function Breadcrumb({ children }) {
  return (
    <span className="c-breadcrumb">
      {children.reduce((prev, curr) => [prev, ' / ', curr])}
    </span>
  );
}

Breadcrumb.propTypes = propTypes;

export default Breadcrumb;
