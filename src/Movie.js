import React, { Component } from 'react';

class Movie extends Component {
 render() {
   if(!this.props.id) {
     return null;
   }
    return (
        <div className='movie'>
          <div className='poster'>
            <img src={this.props.poster} alt='poster'/>
          </div>
          <div className='short-summary'>
            <div className='title'>
              <h3>{this.props.title}  ({this.props.year})</h3>
            </div>
            <div className='short-plot'>
              <p>{this.props.plot}</p>
            </div>
            <button onClick={() => this.props.onAdd()}>Add Movie Title</button>
          </div>
        </div>
    );
  }
};



export default Movie;
