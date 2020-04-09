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
    const movies = this.state.movies.map( movie => ( 
      <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
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
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
        <div className={movies ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : 'Loading...'}
        </div>
    );
  }
}

export default App;
