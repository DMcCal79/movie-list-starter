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



export default Movie;
