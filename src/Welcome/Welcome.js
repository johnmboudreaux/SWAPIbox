import React from 'react';
import PropTypes from 'prop-types';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Welcome</h1>
    </div>
  );
};

Welcome.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
};

export default Welcome;
