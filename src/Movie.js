import React from 'react';

const Movie = (props) => {
   if(!props.id) {
     return null;
   }
    return (
        <div className='movie'>
          <div className='poster'>
            <img src={props.poster} alt='poster'/>
          </div>
          <div>
            <button onClick={() => props.onDiscard()}>x</button>
          </div>
          <div className='short-summary'>
            <div className='title'>
              <h3>{props.title}  ({props.year})</h3>
            </div>
            <div className='short-plot'>
              <p>{props.plot}</p>
            </div>
            <button onClick={() => props.onAdd()}>Add Movie Title</button>
          </div>
        </div>
    );
};

Movie.propTypes = {
  id: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired,
  onDiscard: React.PropTypes.func.isRequried,
  title: React.PropTypes.string.isRequired,
  year: React.PropTypes.string.isRequired,
  plot: React.PropTypes.string.isRequired,
  onAdd: React.PropTypes.func.isRequired
};



export default Movie;
