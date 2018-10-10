import React, { Component } from 'react';
import { Table } from 'reactstrap';

class MovieDetails extends Component {
  render() {
    return (
      <Table dark className="bg-gradient-dark">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.charMovies.films.map(film => (
            <tr key={film.episode_id}>
              <td>{film.title}</td>
              <td>{film.release_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default MovieDetails;
