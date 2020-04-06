import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
        <h1>{this.props.movies}</h1>
        );
    }
}

export default Movie;