import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return(
      <div>
        <input
          className='search-bar'
          type='text'
          placeholder='Search Movies'
          value={this.props.value}
          onChange={ event => this.props.onChange(event) }
         />
         <button className="search-button" onClick={() =>this.props.onSearch()}>Search</button>
       </div>
    );
  }
}











export default SearchBar;
