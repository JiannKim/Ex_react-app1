import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';


function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h2>{title}</h2>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    {/* <p>{synopsis}</p> */}
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='... more'
                        trimright
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}
// 1/1 commit (4/11)
// 1/2 commit (4/11)
// 1/3 commit (4/11)

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">| {genre} </span>
    )
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

Movie.propTypes= {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}

MoviePoster.prototype = {
    poster: propTypes.string.isRequired,
    alt: propTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: propTypes.string.isRequired
}


export default Movie;