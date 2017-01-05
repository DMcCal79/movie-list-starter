import React, { Component } from 'react';
import Movie from './Movie';

class ShortProfile extends Component {
  render() {
    return (
      <div className="short-profile">
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
      </div>
    );
  }
}


export default ShortProfile;











// export default MovieList;
