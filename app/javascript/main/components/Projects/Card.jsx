import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import STATUSES from '../../constants/statuses';
import routes from '../../constants/routes';

const propTypes = {
  details: PropTypes.shape({
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
  const statusText = STATUSES[details.status].label;
  // TODO
  const estimateType = details.estimate ? details.estimate.type : 'points';
  const estimateValue = details.estimate ? details.estimate.value : '';
  return (
    <div className={`c-card c-card--${details.status}`}>
      <div className="c-card__titlebar">
        <Link to={routes.STORY.build({ storyId: details.id })} className="c-card__slug">
          {details.slug}
        </Link>
        <div className="c-card__status">{statusText}</div>
        <div className={`c-card__estimate c-card__estimate--${estimateType}`}>
          {estimateValue}
        </div>
      </div>
      <div className="c-card__summary">{details.summary}</div>
    </div>
  );
}

Card.propTypes = propTypes;

export default Card;
