import React, {Component} from 'react';
import { getMovieDetail, getMovieTrailer, getMovieRec } from '../actions/movie';
import { getMovieGenres } from "../actions/genres";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router";
import config from "../config";
import jss from "jss";
import preset from "jss-preset-default";
import jssExpand from "jss-expand";

import Trailer from '../components/Trailer';
import Movie from "../components/Movie";

jss.setup(preset(), jssExpand());

const styles = {
    moviePage: {
        padding: 20,
        display: 'flex',
        alignItems: 'flex-start',
    },
    moviePoster: {
        height: 500,
        width: 350,
        objectFit: 'cover',
        borderBottom: '5px solid #FE6B8B',
    },
    movieDescription: {
        paddingLeft: 20,
    },
    moviePlot: {
        color: '#5c6c79',
    },
    movieGenres: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    genre: {
        display: 'block',
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
        padding: '2px 5px',
        margin: '5px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    moviesHolder: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }

};

const {classes} = jss.createStyleSheet(styles).attach();

class SingleMovie extends Component {

    static path = '/movie/:id';

    componentDidMount() {
        const { match, getMovieDetail, getMovieTrailer, getMovieRec, getMovieGenres } = this.props;
        getMovieDetail(match.params.id);
        getMovieTrailer(match.params.id);
        getMovieRec(match.params.id);
        getMovieGenres();
    }


    render() {

        const { detail: { data, isFetched}, trailer, rec, genres } = this.props;

        return (
            <div>
                <div>
                    <div className={classes.moviePage}>
                        <div>
                            <img src={`${config.API_IMAGE.small}/${data.poster_path}`} alt="" className={classes.moviePoster}/>
                            <h4>IMDB ID:{data.imdb_id}</h4>
                            <h4>Original title:{data.original_language}</h4>
                            <h4>{data.tagline}</h4>
                        </div>

                        <div className={classes.movieDescription}>
                            <h2>{data.title}</h2>
                            <div className={classes.movieGenres}>
                                {
                                    data.genres && data.genres.map((item) => (
                                        <a href="#" className={classes.genre}>{item.name}</a>
                                    ))
                                }
                            </div>
                            <p className={classes.moviePlot}>{data.overview}</p>
                            <h4>Trailer:</h4>
                            <Trailer data={trailer.data} isFetched={trailer.isFetched}/>
                        </div>
                    </div>

                    <Movie items={rec.data} genres={genres} isFetched={rec.isFetched}/>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getMovieDetail,
        getMovieTrailer,
        getMovieRec,
        getMovieGenres,
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        detail: state.movie.detail,
        trailer: state.movie.trailer,
        rec: state.movie.rec,
        genres: state.genres.all,
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleMovie));