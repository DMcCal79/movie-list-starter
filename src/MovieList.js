import React from 'react';
import MovieListItem from './MovieListItem';
import { Grid, Row, Col } from 'react-bootstrap';


const MovieList = (props) => {
    return(
      <Grid className='movie-list-all'>
        <Row className='movie-list-row'>
          <div>
            <ul className='movie-list'>
            {props.userMovies.map(movie => {
              return(
                <Col md={2} xs={12} className='movie-list-container'>
                  <MovieListItem
                    key={movie.imdbID}
                    id={movie.imdbID}
                    poster={movie.Poster}
                    title={movie.Title}
                    year={movie.Year}
                    onRemove={props.onRemove}
                  />
                </Col>
              );
            })}
            </ul>
          </div>
        </Row>
      </Grid>
      );
    }

MovieList.propTypes = {
  userMovies: React.PropTypes.array.isRequired,
  onRemove: React.PropTypes.func.isRequired
};

export default MovieList;
