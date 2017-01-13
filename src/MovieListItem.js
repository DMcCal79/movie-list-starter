import React from 'react';
import { Link } from 'react-router'

const MovieListItem = (props) => {
    return(
        <li className='movie-list-item'>
          <div className='movie-item'>
          <Link to={`/movie/${props.id}`} className='long-prof-link'>
            <div className='movie-item-poster'>
              <img src={props.poster} alt='movie-list-poster'/>
            </div>
            <div className='movie-item-title'>
              <h5>{props.title} ({props.year})</h5>
            </div>
            </Link>
            <div>
              <button onClick={() => props.onRemove(props.id)}>Remove</button>
            </div>
          </div>
        </li>
    );
}

export default MovieListItem;
