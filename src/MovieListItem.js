import React, { Component } from 'react';
import { Link } from 'react-router'

class MovieListItem extends Component {
  render() {
    return(
        <li className='movie-list-item'>
          <div className='movie-item'>
          <Link to={`/movie/${this.props.id}`} className='long-prof-link'>
            <div className='movie-item-poster'>
              <img src={this.props.poster} alt='movie-list-poster'/>
            </div>
            <div className='movie-item-title'>
              <h5>{this.props.title} ({this.props.year})</h5>
            </div>
            </Link>
            <div>
              <button onClick={() => this.props.onRemove(this.props.id)}>Remove</button>
            </div>
          </div>
        </li>
    );
  }
}

export default MovieListItem;
