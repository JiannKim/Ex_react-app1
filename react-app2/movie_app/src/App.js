import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {}

  //3초 후 로드
  componentDidMount() {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_dy=rating')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

//리액트 내장객체와 구분하기 위해 "_" 붙이기
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => ( 
      <Movie title={movie.title} poster={movie.poster} key={index} />
    ))
    return movies;
  }
                              /**************************************/
                              //51 line 삼항연산자 ? = if / : = else //
                              /**************************************/
  render() {
    return (
        <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loading...'}
        </div>
    );
  }
}

export default App;
