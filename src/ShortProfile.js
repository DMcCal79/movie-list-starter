import React from 'react';
import Movie from './Movie';
import { Grid, Row, Col } from 'react-bootstrap';

const ShortProfile = (props) => {

    if (props.movies.Response === 'False') {
      return <h2 id='not-found'>Movie not found!</h2>
    }
    return (
      <Grid>
        <Row>
          <Col md={10} mdOffest={1}>
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
          </Col>
        </Row>
      </Grid>
    );
  }

ShortProfile.propTypes = {
  movies: React.PropTypes.object.isRequired,
  onAdd: React.PropTypes.func.isRequired,
  onDiscard: React.PropTypes.func.isRequired
};



export default ShortProfile;
