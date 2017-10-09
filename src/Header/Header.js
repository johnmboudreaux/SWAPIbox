import React from 'react';
import PropTypes from 'prop-types';


const Header = () => {
  return (
    <div>

    </div>
  );
};

Header.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
};

export default Header;
