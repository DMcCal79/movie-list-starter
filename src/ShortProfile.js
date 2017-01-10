import React, { Component } from 'react';
import Movie from './Movie';

class ShortProfile extends Component {
  render() {
    if (this.props.movies.Response === 'False') {
      return <h2>Movie not found!</h2>
    }
    return (
      <div className="short-profile">
             <Movie
               key={this.props.movies.imdbID}
               id={this.props.movies.imdbID}
               poster={this.props.movies.Poster}
               title={this.props.movies.Title}
               year={this.props.movies.Year}
               plot={this.props.movies.Plot}
               onAdd={this.props.onAdd}
              />
      </div>
    )};
  }



export default ShortProfile;
