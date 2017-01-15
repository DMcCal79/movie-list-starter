import React from 'react';
import  {Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap'

const SearchBar = (props) => {
    return (
      <Grid>
        <Row>
          <Col className='search' md={12}>
              <h1>Movie Quest</h1>
                <div className='search-bar'>
                  <input
                    type='text'
                    placeholder='Search by movie title'
                    value={props.value}
                    onChange={ event => props.onChange(event) }
                    onKeyPress={ target => props.onSearchKey(target) }
                   />
                  <Button bsSize='md' bsStyle='primary' className="search-button"  onClick={() =>props.onSearch()}><Glyphicon glyph='search'/></Button>
                </div>
          </Col>
        </Row>
      </Grid>
    );
}


SearchBar.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSearchKey: React.PropTypes.func.isRequired,
  onSearch: React.PropTypes.func.isRequired
};


export default SearchBar;
