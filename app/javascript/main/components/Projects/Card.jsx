import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  estimate: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }).isRequired
};

function Card(props) {
  return (
    <div>
      <p>ID: {props.id}</p>
      <p>Title: {props.title}</p>
      <p>Description: {props.description}</p>
      <p>Estimate: {props.estimate.value} {props.estimate.type}</p>
    </div>
  );
}

Card.propTypes = propTypes;

export default Card;
