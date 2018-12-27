import React from 'react';
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import { loadMovieSearch } from "../actions/movies";

import MovieList from '../components/MovieList';

class Search extends React.Component {

    static path = '/search/:query';

    componentDidMount() {
        const {match, loadMovieSearch} = this.props;
        loadMovieSearch(match.params.query);
    }

    componentWillReceiveProps(nextProps){
        const { match, loadMovieSearch } = this.props;
        if(nextProps.match.params.query !== match.params.query){
            loadMovieSearch(nextProps.match.params.query);
        }
    }

    componentWillUnmount(){
        const { ClearSearchText } = this.props;
        ClearSearchText();

    }

    render() {
        const { movies, isFetched } = this.props;

        if(!isFetched)
            return (
                <div>
                    Loading...
                </div>
            );
        return(
            <div>
                {movies && movies.results.length > 0 && (<MovieList movies={movies.results}/>)}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        loadMovieSearch
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        movies: state.movies.all,
        isFetched: state.movies.isFetched,
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));