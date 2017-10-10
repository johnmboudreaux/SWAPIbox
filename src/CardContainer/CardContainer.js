import React from 'react';
import PropTypes from 'prop-types';


const CardContainer = () => {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

CardContainer.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
};

export default CardContainer;
