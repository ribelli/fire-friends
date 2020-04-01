import React, { Component, Suspense } from 'react';
import MovieCard from '../movie-card';
import { searchListOfFilms } from '../../store/actions/user-actions';
import { connect } from 'react-redux';
import LoadingSpinner from "../../components/loading-spinner";
import './style/index.scss';

const imdbAPIkey = '3782ea60';

class MovieSelect extends Component {
    state = {
        moviesList: [],
        favoriteMovies: [],
        searchTerm: '',
        isEmptyResult: false
    };

    search = event => {
        event.preventDefault();
        this.props.dispatch(searchListOfFilms(imdbAPIkey, this.state.searchTerm))
            .then(res => {
                if (!res.Search) {
                    this.setState({
                        moviesList: [],
                        isEmptyResult: true
                    });
                    return;
                }
                const moviesList = res.Search.map(movie => movie.imdbID);
                this.setState({
                    moviesList,
                    isEmptyResult: false
                });
            });
    };

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    handleFavoriteMovies = (favoriteMovie, isRemovingId) => {
        if (typeof isRemovingId === "undefined") {
            this.addFavoriteMovie(favoriteMovie);
        } else {
            this.removeFavoriteMovie(isRemovingId)
        }
    };

    addFavoriteMovie = (favoriteMovie) => {
        this.setState(prevState => ({
            favoriteMovies: [...prevState.favoriteMovies, favoriteMovie]
        }));
    };

    removeFavoriteMovie = (id) => {
        this.setState(prevState => {
            let newList = prevState.favoriteMovies.filter((item, j) =>  id !== j);
            return { favoriteMovies: newList };
        });
        console.log(this.state.favoriteMovies)
    };

    render() {
        const { moviesList, isEmptyResult, favoriteMovies } = this.state;

        return (
            <div className="movie-select">
                <form onSubmit={this.search}>
                    <div className="input-container _with-button">
                        <input className="fr-input _grow-2" type="search"
                               name="imdbFilms"
                               tabIndex="8"
                               spellCheck={true}
                               onChange={this.handleChange}
                               placeholder={this.props.placeholderQuery}
                               autoComplete="off"/>
                        <label htmlFor='imdbFilms' className='fr-label'>
                            {this.props.placeholderQuery}
                        </label>
                        <button type="submit" className="fr-button _dark _grow-1">
                            {this.props.searchText}
                        </button>
                    </div>
                </form>
                <Suspense fallback={<LoadingSpinner/>}>
                <ul className="movie-list-container">
                    {((moviesList.length > 0) || !isEmptyResult) ? (
                        moviesList.map( movie => (
                            <MovieCard onSelectMovie={this.handleFavoriteMovies}
                                       isFavorite={false} movieID={movie} key={movie} />
                        ))
                    ) : (<li><p>Couldn't find any movie</p></li>)}
                </ul>

                <ul className={`movie-list-container _favorite ${favoriteMovies.length > 0 ? "" : "_empty"}`}>
                    <span>Favorite films:</span>
                    {(favoriteMovies.length > 0) ?
                        favoriteMovies.map( (movie, id) => (
                        <MovieCard onSelectMovie={this.handleFavoriteMovies}
                                   isFavorite={true} movieID={movie} id={id} key={movie} />
                        )) : '' }
                </ul>
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        results: state.interestsListReducer.results
    };
};

export default connect(mapStateToProps)(MovieSelect);
