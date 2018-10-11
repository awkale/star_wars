import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class NoData extends Component {
  render() {
    return (
      <div>
        <Alert color="warning">
          I’ve got a bad feeling about this!
          <br /> No data for {this.props.currentCharacter}
        </Alert>
      </div>
    );
  }
}

export default NoData;
