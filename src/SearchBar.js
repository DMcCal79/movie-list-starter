import React from 'react';

const SearchBar = (props) => {
    return (
      <div className='search'>
          <input
            className='search-bar'
            type='text'
            placeholder='Search Movies'
            value={props.value}
            onChange={ event => props.onChange(event) }
            onKeyPress={ target => props.onSearchKey(target) }
           />
           <input type='button' className="search-button"  onClick={() =>props.onSearch()} value='Search'/>
       </div>
    );
}


SearchBar.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSearchKey: React.PropTypes.func.isRequired,
  onSearch: React.PropTypes.func.isRequired
};


export default SearchBar;
