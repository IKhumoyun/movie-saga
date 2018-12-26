import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {getTopMovies} from "../actions/movies";
import connect from "react-redux/es/connect/connect";

import Movie from 'components/Movie';
import LoadMore from 'components/LoadMore';

class MoviesList extends Component {

    static path = '/movieList';

    componentDidMount() {
        const { getTopMovies } = this.props;
        getTopMovies();
    }

    loadMore = () => {
        const { page, getTopMovies } = this.props;
        getTopMovies(page+1);
    };

    render() {

        const { movies } = this.props;

        return (
            <div>
                <Movie items={movies}/>

                <LoadMore load={this.loadMore}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getTopMovies
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        movies: state.movies.all,
        page: state.movies.page,
        isFetched: state.movies.isFetched
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);