import React from 'react';
import { Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

const Movie = (props) => {
   if(!props.id) {
     return null;
   }
    return (
      <Grid>
        <Row>
          <Col md={4}>
            <div className='poster'>
              <img src={props.poster} alt='poster'/>
            </div>
          </Col>
          <Col md={7}>
            <div className='short-summary'>
              <div className='title'>
                <h3>{props.title}  ({props.year})</h3>
              </div>
              <div className='short-plot'>
                <p>{props.plot}</p>
              </div>
              <Button className='short-profile-buttons' bsStyle='success' bsSize='md' onClick={() => props.onAdd()}><Glyphicon glyph='plus'/> Add to List</Button>
              <Button className='short-profile-buttons' bsStyle='danger' bsSize='md' onClick={() => props.onDiscard()}><Glyphicon glyph='remove'/> Dismiss</Button>
            </div>
          </Col>
        </Row>
      </Grid>
    );
};

Movie.propTypes = {
  id: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired,
  onDiscard: React.PropTypes.func.isRequried,
  title: React.PropTypes.string.isRequired,
  year: React.PropTypes.string.isRequired,
  plot: React.PropTypes.string.isRequired,
  onAdd: React.PropTypes.func.isRequired
};



export default Movie;
