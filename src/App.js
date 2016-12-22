import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      movies: []
    };
  }

  // componentDidMount() {
  //     axios.get(`http://www.omdbapi.com/?t=${this.state.searchText}&y=&plot=short&r=json`)
  //       .then(resp => {
  //         this.setState({
  //           searchText: this.state.searchText,
  //           movies: [resp.data]
  //         })
  //       })
  //       .catch(err => console.log(`Error! ${err}`));
  //   }

  handleSearchBarChange(event) {
    this.setState({
      movies: this.state.movies,
      searchText: event.target.value
    })
  }

  getFilteredMovies() {
    //Removes white space and converts the searchText to lowercase
    const term = this.state.searchText.trim().toLowerCase();

    axios.get(`http://www.omdbapi.com/?t=${term}&plot=short&r=json`)

      .then(resp => {

        this.setState({
          searchText: this.state.searchText,
          movies: [resp.data]
        })
      });
  }


  render() {
    return (
      <div className='App'>
        <SearchBar value={this.state.searchText} onChange={this.handleSearchBarChange.bind(this)} onSearch={this.getFilteredMovies.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
