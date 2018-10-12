import React, { Component } from 'react';
import { Table } from 'reactstrap';
import MovieDetail from './MovieDetail';

class MovieTable extends Component {
  render() {
    return (
      <Table dark className="bg-gradient-dark">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Director</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.charMovies.films.map(film => (
            <MovieDetail
              key={film.episode_id}
              title={film.title}
              date={film.release_date}
              director={film.director}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default MovieTable;
