import React, { Component } from 'react';

class MovieListItem extends Component {
  render() {
    return(
      <li>
        <div className='movie-item'>
          <div className='movie-item-poster'>
            <img src={this.props.poster} alt='movie-list-poster'/>
          </div>
          <div className='movie-item-title'>
            <h5>{this.props.title} ({this.props.year})</h5>
          </div>
          <div>
            <button onClick={() => this.props.onRemove(this.props.id)}>Remove</button>
          </div>
        </div>
      </li>
    );
  }
}

export default MovieListItem;
