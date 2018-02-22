import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import React from 'react';

import STATUSES from '../../constants/statuses';

const propTypes = {
  details: ImmutablePropTypes.contains({
    slug: PropTypes.string,
    summary: PropTypes.string,
    status: PropTypes.string,
    estimate: PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.number
    })
  })
};

function Card({ details }) {
  const statusText = STATUSES[details.get('status')].label;
  return (
    <div className={`c-card c-card--${details.get('status')}`}>
      <div className="c-card__titlebar">
        <div className="c-card__slug">{details.get('slug')}</div>
        <div className="c-card__status">{statusText}</div>
        <div className={`c-card__estimate c-card__estimate--${details.getIn(['estimate', 'type'])}`}>{details.getIn(['estimate', 'value'])}</div>
      </div>
      <div className="c-card__summary">{details.get('summary')}</div>
    </div>
  );
}

Card.propTypes = propTypes;

export default Card;
