import React from 'react';
import PropTypes from 'prop-types';

const Button = ( { label } ) => {
  return (
    <span className='button'>{label}</span>
  );
};

{/* Button.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
}; */}

export default Button;
