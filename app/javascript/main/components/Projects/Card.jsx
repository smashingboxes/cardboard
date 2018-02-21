import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  estimate: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.number
  })
};

function Card(props) {
  return (
    <div className="c-card">
      <p>ID: {props.id}</p>
      <p>Title: {props.title}</p>
      <p>Description: {props.description}</p>
      <p>Estimate: {props.estimate.value} {props.estimate.type}</p>
    </div>
  );
}

Card.propTypes = propTypes;

export default Card;
