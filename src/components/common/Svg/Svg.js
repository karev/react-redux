import './Svg.css';
import React, { PropTypes } from 'react';

const Svg = (props) => {
  const {className, icon, size } = props;

  return (
    <svg className={`icon icon-${icon} icon--${size} ${className}`}>
      <use xlinkHref={`/public/sprite.svg#${icon}`} />
    </svg>
  );
};

Svg.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string
};

Svg.defaultProps = {
  size: 'medium'
};

export default Svg;
