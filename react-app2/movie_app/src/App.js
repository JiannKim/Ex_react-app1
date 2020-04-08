import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {}

  //3초 후 로드
  componentDidMount() {
    this._getMovies()
  }

//리액트 내장객체와 구분하기 위해 "_" 붙이기
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => ( 
      <Movie title={movie.title} poster={movie.large_cover_image} key={index} />
    ))
    return movies;
  }

                              /**************************************/
                              //     삼항연산자 ? = if / : = else    //
                              /**************************************/

  _getMovies = async () => {
     const movies = await this._callApi()
     this.setState({
       movies
      })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    return (
        <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loading...'}
        </div>
    );
  }
}

export default App;
