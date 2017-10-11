import React from 'react';
import PropTypes from 'prop-types';

const Button = ( { label } ) => {
  return (
    <span className='button'>{label}</span>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired
};

export default Button;
