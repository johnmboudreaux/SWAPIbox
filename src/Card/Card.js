import React from 'react';
import PropTypes from 'prop-types';

const Card = ( { cardData } ) => {
  const rowInfoData = {...cardData};
  delete rowInfoData.name;
  delete rowInfoData.type;
  delete rowInfoData.isFavorite;
  const displayRows = Object.keys(rowInfoData).map( (rowName, index) => {
    return (
      <tr key={`${cardData.name}-${index}`}>
        <td className='section'>
          {rowName}
        </td>
        <td>
          {rowInfoData[rowName]}
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
      <h5>Add to Favorites</h5>
    </div>
  );
};

Card.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
};

export default Card;
