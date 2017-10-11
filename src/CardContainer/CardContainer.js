import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Button from '../Button/Button';


const CardContainer = () => {
  return (
    <div className='cardContainer'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <div className='prev-next'>
        <Button label='Prev' />
        <Button label='Next' />
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
};

export default CardContainer;
