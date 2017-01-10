import React, { Component } from 'react';
import MovieListItem from './MovieListItem';


class MovieList extends Component {
  render() {
    return(
      <div>
        <ul className='movie-list'>
        {this.props.userMovies.map(movie => {
          return(
            <MovieListItem
              key={movie.imdbID}
              id={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
            />
          );
        })}

        </ul>
      </div>
    );
  }
}

export default MovieList;
