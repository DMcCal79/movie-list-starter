import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {
    return (
      <ul className="movie-list">
        {this.props.movies.map(movie => {
          return (
             <Movie
               key={movie.imdbID}
               id={movie.imdbID}
               poster={movie.Poster}
               title={movie.Title}
               year={movie.Year}
               plot={movie.Plot}
              />
            )
        })}
      </ul>
    );
  }
}


export default MovieList;











// export default MovieList;
