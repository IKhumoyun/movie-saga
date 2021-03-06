import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import { getTopMovies } from "../actions/movies";
import { getMovieGenres } from "../actions/genres";
import connect from "react-redux/es/connect/connect";

import Movie from '../components/Movie';
import LoadMore from '../components/LoadMore';

class MainPage extends Component {

    static path = '/';

    componentDidMount() {
        const { getTopMovies, getMovieGenres } = this.props;
        getTopMovies();
        getMovieGenres();
    }

    loadMore = () => {
        const { page, getTopMovies } = this.props;
        getTopMovies(page+1);
    };

    render() {

        const { movies, genres, isFetched } = this.props;

        return (
            <div>
                <Movie items={movies} genres={genres} isFetched={isFetched}/>

                <LoadMore load={this.loadMore}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getTopMovies,
        getMovieGenres,
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        movies: state.movies.all,
        page: state.movies.page,
        genres: state.genres.all,
        isFetched: state.movies.isFetched
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);