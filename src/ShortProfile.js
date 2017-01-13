import React from 'react';
import Movie from './Movie';

const ShortProfile = (props) => {

    if (props.movies.Response === 'False') {
      return <h2>Movie not found!</h2>
    }
    return (
      <div className="short-profile">
             <Movie
               key={props.movies.imdbID}
               id={props.movies.imdbID}
               poster={props.movies.Poster}
               title={props.movies.Title}
               year={props.movies.Year}
               plot={props.movies.Plot}
               onAdd={props.onAdd}
               onDiscard={props.onDiscard}
              />
      </div>
    );
  }



export default ShortProfile;
