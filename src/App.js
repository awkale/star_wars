import React, { Component } from 'react';
import './App.css';
import characters from './characters';
import Header from './components/Header';

class App extends Component {
  state = {
    characters: {}
  };

  loadSampleFishes = () => {
    this.setState({ characters });
  };

  render() {
    return (
    <div className="container">
      <Header></Header>
    </div>
    );
  }
}

export default App;
