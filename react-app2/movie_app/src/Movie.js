import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';


function Movie({title, poster}) {
    return (
        <div>
            <h1>{title}</h1>
            <MoviePoster poster={poster} />
        </div>
    )
}

Movie.propTypes= {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired
}
/*
class MoviePoster extends Component {

    static propTypes = {
        poster: propTypes.string.isRequired
    }

    render() {
        return (
            <img src={this.props.poster} alt="dkdk" />
        );
    }
}
*/
//축약 (render X, LifeCycles X)
function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

MoviePoster.prototype = {
    poster: propTypes.string.isRequired
}

export default Movie;