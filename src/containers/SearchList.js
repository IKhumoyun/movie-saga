import React from 'react';
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import {loadMovieSearch} from "../actions/movies";

import Movie from '../components/Movie';

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

    render() {
        const { searchItems, isFetched } = this.props;

        if(!isFetched)
            return (
                <div>
                    Loading...
                </div>
            );
        return(
            <div>
                {searchItems && searchItems.length > 0 && (<Movie items={searchItems}/>)}
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
        searchItems: state.movies.searchItems,
        isFetched: state.movies.isFetched,
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));