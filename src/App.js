import ReactGA from 'react-ga';
import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import MainCharacters from './components/MainCharacters';
import MovieTable from './components/MovieTable';
import NoData from './components/NoData';
import Yoda from './components/Yoda';
class App extends Component {
  state = {
    selectedCharacter: '',
    filmLinks: [],
    error: null,
    films: [],
    count: 0
  };

  componentDidMount() {
    ReactGA.initialize('UA-171213-16');
    ReactGA.pageview('/');
  }

  getCharInfo = (name, url) => {
    fetch(url)
      .then(this.handleErrors)
      .then(response => response.json())
      .then(json => {
        this.setState(
          {
            selectedCharacter: name,
            filmLinks: json.films,
            error: null,
            films: [],
            count: this.state.count + 1
          },
          this.fetchMovies(json.films)
        );
      })
      .catch(error => {
        this.setState({
          selectedCharacter: name,
          error: error
        });
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

  handleErrors = response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-sm-3">
            <MainCharacters
              getCharInfo={this.getCharInfo}
              selectedCharacter={this.state.selectedCharacter}
            />
          </div>
          <div className="col-sm-9">
            {this.state.error === null ? (
              <MovieTable charMovies={this.state} />
            ) : (
              <NoData currentCharacter={this.state.selectedCharacter} />
            )}
          </div>
        </div>
        {this.state.count > 2 ? <Yoda /> : null}
      </div>
    );
  }
}

export default App;
