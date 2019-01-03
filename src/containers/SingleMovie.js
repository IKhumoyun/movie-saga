import React, {Component} from 'react';
import { getMovieDetail, getMovieTrailer, getMovieRec, getMovieCast } from '../actions/movie';
import { getMovieGenres } from "../actions/genres";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router";
import config from "../config";
import jss from "jss";
import preset from "jss-preset-default";
import jssExpand from "jss-expand";

import Trailer from '../components/Trailer';
import RecList from "../components/RecList";

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
    },
    movieCast: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    actorImg: {
        height: 200,
        width: 150,
        objectFit: 'cover',
        borderBottom: '5px solid #FE6B8B',
    },
    actorName: {
        whiteSpace: 'wrap',
        margin: 0,
        fontSize: '16px',
    },
    castItem: {
        width: 150,
        paddingRight: 30,
    },
    castCharacter: {
        whiteSpace: 'wrap',
        color: '#4f4f4f',
        margin: 0,
        fontSize: '12px',
    },


};

const {classes} = jss.createStyleSheet(styles).attach();

class SingleMovie extends Component {

    static path = '/movie/:id';

    componentDidMount() {
        const { match, getMovieDetail, getMovieTrailer, getMovieRec, getMovieGenres, getMovieCast } = this.props;
        getMovieDetail(match.params.id);
        getMovieTrailer(match.params.id);
        getMovieRec(match.params.id);
        getMovieGenres();
        getMovieCast(match.params.id);
    }


    render() {

        const { detail: { data, isFetched}, trailer, rec, genres, cast } = this.props;

        const castCut = cast.data.slice(0,5);

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

                            <h2>Cast:</h2>
                            <div className={classes.movieCast}>
                                {
                                    castCut && castCut.map((item)=> (
                                        <div className={classes.castItem}>
                                            <img src={`https://image.tmdb.org/t/p/w185/${item.profile_path}`} alt="" className={classes.actorImg}/>
                                            <h4 className={classes.actorName}>{item.name}</h4>
                                            <span className={classes.castCharacter}>{item.character}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <RecList items={rec.data} genres={genres} isFetched={rec.isFetched}/>
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
        getMovieCast,
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        detail: state.movie.detail,
        trailer: state.movie.trailer,
        rec: state.movie.rec,
        genres: state.genres.all,
        cast: state.movie.cast,
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleMovie));