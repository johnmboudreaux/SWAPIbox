import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <a href="/"><img src={logo} alt='logo' /></a>
      <nav>
        <Button path='/people' text='People' />
        <Button path='/planets' text='Planets' />
        <Button path='/vehicles' text='Vehicles' />
        <Button path='/favorites' text='Favorites' />
      </nav>
    </div>
  );
};

Header.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
};

export default Header;
