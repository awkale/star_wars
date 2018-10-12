import React  from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => (
  <div className="mt-4">
    <Jumbotron className="bg-gradient-dark text-warning">
      <h1 className="display-3">The Force Awakens Data!</h1>
      <p className="lead">
        Choose a character below to learn in which movies they appeared.
      </p>
    </Jumbotron>
  </div>
);

export default Header;
