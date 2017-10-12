import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ movie }) => {
  console.log(movie)
    // <div className='welcome'>
    //   <h1>Welcome</h1>
    // </div>

  const romanArray = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
  
  return (
    <div className='welcome-body'>
      <div className="fade"></div>
      <section className="star-wars">

        <div className="crawl">

          <div className="title">
            <p>{ romanArray[movie.EpisodeId] }</p>
            <h1>{ movie.title }</h1>
          </div>

          <p>{ movie.openingCrawl }</p>

        </div>

      </section>
    </div>
  );
};

Welcome.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
};

export default Welcome;
