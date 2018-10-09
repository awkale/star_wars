import React, { Component } from 'react';
import sampleCharacters from '../sampleCharacters.json';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

class MainCharacters extends Component {
  listCharacters = sampleCharacters.characters.map((char, i) => {
    return (
      <div class="col">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{char.name}</CardTitle>
            <Button>{char.url}</Button>
          </CardBody>
        </Card>
      </div>
    );
  });

  render() {
    return <>{this.listCharacters}</>;
  }
}

export default MainCharacters;
