import React from 'react';
import PropTypes from 'prop-types';


const Card = () => {
  return (
    <div className='card'>
      <h2>Luke Skywalker</h2>
      <table>
        <tbody>
          <tr>
            <td className='section'>
              Homeworld:
            </td>
            <td>
              Tatooine
            </td>
          </tr>
          <tr>
            <td className='section'>
              Species:
            </td>
            <td>
              Human
            </td>
          </tr>
          <tr>
            <td className='section'>
              Language:
            </td>
            <td>
              Galactic Basic
            </td>
          </tr>
          <tr>
            <td className='section'>
              population:
            </td>
            <td>
              200,000
            </td>
          </tr>
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
