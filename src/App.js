import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import MainCharacters from './components/MainCharacters';
import MovieTable from './components/MovieTable';
class App extends Component {
  state = {
    charSelected: '',
    filmLinks: [],
    error: null,
    films: []
  };

  getCharInfo = (name, url) => {
    fetch(url)
      .then(data => data.json())
      .then(json => {
        if (json.detail) {
          alert(`Error: ${json.detail} (${url})`);
        } else {
          this.setState(
            {
              charSelected: name,
              filmLinks: json.films,
              films: []
            },
            this.fetchMovies(json.films)
          );
        }
      });
  };

  fetchMovies = (filmLinks = []) => {
    filmLinks.map(link =>
      fetch(link)
        .then(data => data.json())
        .then(json =>
          this.setState({
            ...this.state,
            films: [...this.state.films, json]
          })
        )
    );
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-3">
            <MainCharacters
              getCharInfo={this.getCharInfo}
              charSelected={this.state.charSelected}
            />
          </div>
          <div className="col-9">
            {!!this.state.charSelected ? (
              <MovieTable charMovies={this.state} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
