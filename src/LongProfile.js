import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class LongProfile extends Component {
  constructor() {
    super();
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?i=${this.props.params.id}&plot=full&r=json`)
      .then(resp => {
        this.setState({
          movie: resp.data
        });
      })
      .catch(err => console.log(`Error! ${err}`))
  }

  renderLongProfile() {
    return (
      <div className='long-prof'>
        <div className='long-prof-poster'>
          <img src={this.state.movie.Poster} alt='poster'/>
        </div>
        <div className='long-prof-info'>
          <h2>{this.state.movie.Title} ({this.state.movie.Year})</h2>
           <ul className='long-prof-facts'>
            <li>Rated: {this.state.movie.Rated}</li>
            <li>Runtime: {this.state.movie.Runtime}</li>
            <li>Genre: {this.state.movie.Genre}</li>
            <li>Director: {this.state.movie.Director}</li>
            <li>Writer: {this.state.movie.Writer}</li>
            <li>Actors: {this.state.movie.Actors}</li>
            <li>Awards: {this.state.movie.Awards}</li>
            <li>Metascore: {this.state.movie.Metascore}</li>
            <li>Imdb Rating: {this.state.movie.imdbRating}</li>
           </ul>
        </div>
        <div className='long-prof-plot'>
          <p>Plot: {this.state.movie.Plot}</p>
        </div>
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
    );
  }

  render() {
    if (!this.state.movie) {
      return <h2>Loading movie...</h2>
    }
    return this.renderLongProfile()
  }
}

export default LongProfile;
