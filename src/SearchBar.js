import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return(
      <div className='search'>
          <input
            className='search-bar'
            type='text'
            placeholder='Search Movies'
            value={this.props.value}
            onChange={ event => this.props.onChange(event) }
            onKeyPress={ target => this.props.onSearchKey(target) }
           />
           <input type='button' className="search-button"  onClick={() =>this.props.onSearch()} value='Search'/>
       </div>
    );
  }
}











export default SearchBar;
