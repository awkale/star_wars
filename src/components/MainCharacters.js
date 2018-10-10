import React, { Component } from 'react';
import sampleCharacters from '../data/sampleCharacters.json';
import { Nav, NavItem, NavLink } from 'reactstrap';

class MainCharacters extends Component {
  listCharacters = sampleCharacters.characters.map((char, i) => {
    return (
      <NavItem key={i}>
        <NavLink
          href="#"
          active={char.name === this.props.charSelected}
          onClick={() => this.props.getCharInfo(char.name, char.url)}
        >
          {char.name}
        </NavLink>
      </NavItem>
    );
  });

  render() {
    return (
      <div>
        <Nav pills vertical>
          {this.listCharacters}
        </Nav>
      </div>
    );
  }
}

export default MainCharacters;
