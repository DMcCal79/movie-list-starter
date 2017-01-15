import React from 'react';
import { Link } from 'react-router';
import { Button, Glyphicon } from 'react-bootstrap'

const MovieListItem = (props) => {
    return(
        <li className='movie-list-item'>
          <div className='movie-item'>
            <Link to={`/movie/${props.id}`} className='long-prof-link'>
              <div className='movie-item-poster'>
                <img src={props.poster} alt='movie-list-poster'/>
              </div>
                <h5 className='movie-item-title'>{props.title}</h5>
                <h5 className='movie-item-year'>({props.year})</h5>
            </Link>
            <div className='movie-item-button'>
              <Button bsSize='xsmall' bsStyle='danger' onClick={() => props.onRemove(props.id)}><Glyphicon glyph='remove'/></Button>
            </div>
          </div>
        </li>
    );
}

MovieListItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  year: React.PropTypes.string.isRequired,
  onRemove: React.PropTypes.func.isRequired

};


export default MovieListItem;
