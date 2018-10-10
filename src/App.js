import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import MainCharacters from './components/MainCharacters';

class App extends Component {
  state = {
    characters: {}
  };

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <MainCharacters></MainCharacters>
        </div>
      </div>
    );
  }
}

export default App;
