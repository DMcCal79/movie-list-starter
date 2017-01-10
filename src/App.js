import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ShortProfile from './ShortProfile';
import MovieList from './MovieList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      movies: [],
      userMoviesList: [],
    };
  }

  componentDidMount() {
    const userSavedMoviesList = JSON.parse(localStorage.getItem('userMoviesList'));

    if(userSavedMoviesList) {
      this.setState({
        searchText: '',
        movies: [],
        userMoviesList: userSavedMoviesList
      });
    }
  }

  handleAddMovie() {
    const userMoviesList = [this.state.movies, ...this.state.userMoviesList];

    this.setState({
      searchText: '',
      movies: [],
      userMoviesList: userMoviesList
    });

    localStorage.setItem('userMoviesList', JSON.stringify(userMoviesList));
  }

  handleSearchBarChange(event) {
    this.setState({
      movies: this.state.movies,
      searchText: event.target.value,
      userMoviesList: this.state.userMoviesList
    })
  }

  getFilteredMovies() {
    //Removes white space and converts the searchText to lowercase
    const term = this.state.searchText.trim().toLowerCase();

    axios.get(`http://www.omdbapi.com/?t=${term}&plot=short&r=json`)

      .then(resp => {
        this.setState({
          searchText: '',
          movies: resp.data,
          userMoviesList: this.state.userMoviesList
        });
      })
      .catch(err => console.log(`Error! ${err}`));
  }

 //This will allow the user to execute the search by simply pressing "enter" instead
 //of  having to click on search.
  getFilteredMoviesKeyPress(target) {

    const term = this.state.searchText.trim().toLowerCase();

    if (target.charCode===13) {
      axios.get(`http://www.omdbapi.com/?t=${term}&plot=short&r=json`)

        .then(resp => {
          this.setState({
            searchText: '',
            movies: resp.data,
            userMoviesList: this.state.userMoviesList
          });
        })
        .catch(err => console.log(`Error! ${err}`));
    }
  }


  render() {
    return (
      <div className='App'>
        <SearchBar value={this.state.searchText} onChange={this.handleSearchBarChange.bind(this)} onSearch={this.getFilteredMovies.bind(this)}
         onSearchKey={this.getFilteredMoviesKeyPress.bind(this)} />
        <ShortProfile movies={this.state.movies} onAdd={this.handleAddMovie.bind(this)} />
        <MovieList userMovies={this.state.userMoviesList} />
      </div>
    );
  }
}

export default App;
