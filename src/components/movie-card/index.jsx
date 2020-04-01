import React, { Component } from 'react';
import { fetchFilmsInfo } from '../../store/actions/user-actions';
import { connect } from 'react-redux';
import './style/index.scss';

const imdbAPIkey = '3782ea60';
const mockPoster =
    'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/140x209/film-4001654135._CB466678728_.png';

class MovieCard extends Component {
    state = {
        movieData: {}
    };

    componentDidMount() {
        this.props.dispatch(fetchFilmsInfo(imdbAPIkey, this.props.movieID))
        .then(res => {
            this.setState({ movieData: res });
        });
    }

    changeListMovies(filmId, id) {
        this.props.onSelectMovie(filmId, id);
    }

    render() {
        let {
            Title,
            Poster,
            imdbID,
            imdbRating
        } = this.state.movieData;

        if (!Poster || Poster === 'N/A') {
            Poster = mockPoster; // return null;
        }

        return (
            <li className="movie-card-container">
                <div className="movie-card">
                    <button className={`movie-card__button ${this.props.isFavorite ? "_cross" : "_plus"}`}
                            onClick={() => this.changeListMovies(imdbID, this.props.id)}/>
                    <div className="bg-image"
                         title={Title}
                        style={{ backgroundImage: `url(${Poster})` }} />
                </div>
                <div className="movie-info">
                    <small>
                        <a href={`http://www.imdb.com/title/${imdbID}/`}
                           target="_blank" rel="noopener noreferrer">
                            IMDb: {imdbRating}
                        </a>
                    </small>
                </div>
            </li>
        );
    }
}


const mapStateToProps = state => {
    return {
        results: state.interestsListReducer.results
    };
};

export default connect(mapStateToProps)(MovieCard);
