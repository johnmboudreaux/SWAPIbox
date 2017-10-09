import React from 'react';
import PropTypes from 'prop-types';


const Card = () => {
  return (
    <div>

    </div>
  );
};

Card.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
};

export default Card;
