import React, { Component } from 'react';

class Movie extends Component {
 render() {
    return (
      // <div className='movie'>
        <li>
          <div className='poster'>
            <img src={this.props.poster} alt='poster'/>
          </div>
          <div className='title'>
            <h3>{this.props.title}  ({this.props.year})</h3>
          </div>
          <div className='short-plot'>
            <p>{this.props.plot}</p>
          </div>
          <button>Add Movie</button>
        </li>
      // </div>
    );
  }
};



export default Movie;
