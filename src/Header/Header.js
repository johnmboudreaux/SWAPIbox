import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';


const Header = () => {
  return (
    <div>
      <h1><a href="/">SWAPI-Box</a></h1>
      <Button path='/people' text='People' />
      <Button path='/planets' text='Planets' />
      <Button path='/vehicles' text='Vehicles' />
      <Button path='/favorites' text='Favorites' />
    </div>
  );
};

Header.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
};

export default Header;
