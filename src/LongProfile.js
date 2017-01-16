import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { Button, Grid, Row, Col } from 'react-bootstrap';

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
      <div className='long-prof-page'>
        <Grid className='long-prof'>
          <Row className='long-prof-group'>
            <Col md={4}>
              <div className='long-prof-poster'>
                <img src={this.state.movie.Poster} alt='poster'/>
              </div>
            </Col>
            <Col md={7}>
              <div className='long-prof-info'>
                <h1><span className='bold'>{this.state.movie.Title} ({this.state.movie.Year})</span></h1>
                  <ul className='long-prof-facts'>
                    <li><span className='bold'>Rated:</span> {this.state.movie.Rated}</li>
                    <li><span className='bold'>Runtime:</span> {this.state.movie.Runtime}</li>
                    <li><span className='bold'>Genre:</span> {this.state.movie.Genre}</li>
                    <li><span className='bold'>Director:</span> {this.state.movie.Director}</li>
                    <li><span className='bold'>Writer:</span> {this.state.movie.Writer}</li>
                    <li><span className='bold'>Actors:</span> {this.state.movie.Actors}</li>
                    <li><span className='bold'>Awards:</span> {this.state.movie.Awards}</li>
                    <li><span className='bold'>Metascore:</span> {this.state.movie.Metascore}</li>
                    <li><span className='bold'>Imdb Rating:</span> {this.state.movie.imdbRating}</li>
                  </ul>
              </div>
            </Col>
            <Col md={1}>
              <Link to={"/"}>
                <Button bsSize='sm' bsStyle='primary'>Back</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className='long-prof-plot'>
                <p>{this.state.movie.Plot}</p>
              </div>
            </Col>
          </Row>
        </Grid>
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
