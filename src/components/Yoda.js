import React, { Component } from 'react';
import yoda from '../img/yoda.png';
import { Tooltip } from 'reactstrap';

class Yoda extends Component {
  state = {
    tooltipOpen: false
  };

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };
  render() {
    return (
      <div>
        <a href="https://awkale.me/" target="_blank" rel="noopener noreferrer">
          <img id="Tooltip" src={yoda} className="yoda" alt="Yoda" />
        </a>
        <Tooltip
          placement="top-start"
          isOpen={this.state.tooltipOpen}
          target="Tooltip"
          toggle={this.toggle}
        >
          <p>Looking? Found someone you have, eh? <br></br>Alex Kale the Force has.</p>
          <p>May the Force be with you.</p>
        </Tooltip>
      </div>
    );
  }
}

export default Yoda;
