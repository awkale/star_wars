import React, { Component } from 'react';
import sampleCharacters from '../data/sampleCharacters.json';
import { Nav, NavItem, NavLink } from 'reactstrap';

class MainCharacters extends Component {
  render() {
    return (
      <div>
        <Nav pills vertical>
          {sampleCharacters.characters.map((char, i) => (
            <NavItem key={i}>
              <NavLink
                href="#"
                active={char.name === this.props.selectedCharacter}
                onClick={() => this.props.getCharInfo(char.name, char.url)}
              >
                {char.name}
              </NavLink>
            </NavItem>
            )
          )}
        </Nav>
      </div>
    );
  }
}

export default MainCharacters;
