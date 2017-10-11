import React from 'react';
import PropTypes from 'prop-types';

const Card = ( { cardData } ) => {
  const rowInfoData = {...cardData};
  delete rowInfoData.name;
  delete rowInfoData.type;
  delete rowInfoData.isFavorite;
  let favText = 'OMG! Totes Fav!!!';
  if (cardData.isFavorite) {
    favText = 'Like watevs. Not my fav';
  }
  const displayRows = Object.keys(rowInfoData).map( (rowName, index) => {
    let arrayData = rowInfoData[rowName];
    if (Array.isArray(rowInfoData[rowName])) {
      arrayData = rowInfoData[rowName].map(personPlaceOrThing => {
        return personPlaceOrThing;
      });
    }
    return (
      <tr key={`${cardData.name}-${index}`}>
        <td className='section'>
          {rowName}
        </td>
        <td>
          {arrayData}
        </td>
      </tr>
    );
  });
  return (
    <div className='card'>
      <h2>{cardData.name}</h2>
      <table>
        <tbody>
          {displayRows}
        </tbody>
      </table>
      <h5>{favText}</h5>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object)
};

export default Card;
