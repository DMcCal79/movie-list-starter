import React from 'react';
import MovieListItem from './MovieListItem';


const MovieList = (props) => {
    return(
      <div>
        <ul className='movie-list'>
        {props.userMovies.map(movie => {
          return(
            <MovieListItem
              key={movie.imdbID}
              id={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              onRemove={props.onRemove}
            />
          );
        })}

        </ul>
      </div>
    );
}

export default MovieList;
