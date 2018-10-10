import React  from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => (
  <div className="mt-4">
    <Jumbotron className="bg-gradient-dark text-warning">
      <h1 className="display-3">The Force Awakens data!</h1>
      <p className="lead">
        Choose a character below to learn more about them.
      </p>
    </Jumbotron>
  </div>
);

export default Header;
