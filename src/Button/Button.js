import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ path, text }) => {
  return (
    <a
      href={path}>
      {text}
    </a>
  );
};

{/* Button.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
}; */}

export default Button;
