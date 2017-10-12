import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Button from '../Button/Button';


const CardContainer = ({ cardData, toggleFavorite } ) => {
  const allCards = cardData.map( (cardDataObj, index) => {
    return <Card key={index} cardData={cardDataObj} toggleFavorite={toggleFavorite}/>
  })
  return (
    <div className='cardContainer'>
      {allCards}
      <div className='prev-next'>
        <Button label='Prev' />
        <Button label='Next' />
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object)
};

export default CardContainer;
