import React, { Component } from 'react';
import Moment from 'react-moment';

class MovieDetail extends Component {
  render() {
    // const date = this.props.date;

    return (
      <tr>
        <td>{this.props.title}</td>
        <td>
          <Moment format="dddd, MMMM Do YYYY">{this.props.date}</Moment>
        </td>
      </tr>
    );
  }
}

export default MovieDetail;
