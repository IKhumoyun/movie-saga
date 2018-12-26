import React, {Component} from 'react';
import { getMovieDetail } from 'actions/movie';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router";
import config from "../config";

class SingleMovie extends Component {

    static path = '/movie/:id';

    componentDidMount() {
        const { match, getMovieDetail } = this.props;
        getMovieDetail(match.params.id);
    }


    render() {

        const { movie } = this.props;

        return (
            <div>
                <h2>{movie.original_title}</h2>
                <img className="movie-img" src={`${config.API_IMAGE.small}/${movie.poster_path}`} alt=""/>
                <p>{movie.overview}</p>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getMovieDetail
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        movie: state.movie.all,
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleMovie));