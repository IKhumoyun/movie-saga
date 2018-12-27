import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import jss from 'jss';
import jssNested from 'jss-nested';
import preset from 'jss-preset-default';

jss.setup(preset(), jssNested());

const styles = {
    movieCard: {
        fontSize: 16,
        width: 260,
        margin: '15px 0',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.5s ease',
        backgroundColor: '#fff',
        '&:hover': {
            boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.3)',

            '& $movieImg': {
                transform: 'scale(1.1)',
            }
        }
    },
    imgHolder: {
        display: 'block',
        position: 'relative',
        width: 260,
        height: 360,
        borderBottom: '5px solid #FE6B8B',
        overflow: 'hidden',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.2)',
            opacity: 1,
            transition: 'all .3s ease',
        }
    },
    movieImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'all 0.5s ease',
    },
    moviesHolder: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingTop: 30,
    },
    movieName: {
        display: 'block',
        color: '#000',
        textDecoration: 'none',
        margin: '10px 0',
        fontFamily: 'Museo100',
        fontSize: '16px',
    },
    movieInfo: {
        padding: 10,
    },
    genre: {
        display: 'block',
        color: '#fff',
        textDecoration: 'none',
        fontSize: '12px',
        padding: '2px 5px',
        margin: '5px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    movieGenres: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    movieRating: {
        position: 'absolute',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        top: 0,
        right: 0,
        color: '#fff',
        padding: '5px 15px',
    }
};

const {classes} = jss.createStyleSheet(styles).attach();

class Movie extends Component {
    render() {

        const { items, genres, isFetched } = this.props;

        return (
            <div className={`${classes.moviesHolder}`}>
                { items && items.map((item) => (
                    <div className={`${classes.movieCard}`}>
                        <Link to={`/movie/${item.id}`} >
                            <div className={`${classes.imgHolder}`}>
                                <img src={`${config.API_IMAGE.small}/${item.poster_path}`} className={`${classes.movieImg}`} alt=""/>
                                <p className={classes.movieRating}>{item.vote_average}</p>
                            </div>
                        </Link>

                        <div className={classes.movieInfo}>
                            <Link to={`/movie/${item.id}`} className={classes.movieName}>{item.title}</Link>
                            <div className={classes.movieGenres}>
                                {isFetched && item.genre_ids.map((id, index) => {
                                    const item = genres.filter(genre => genre.id === id);
                                    if(item.length)
                                        return (
                                            <a href="#" className={classes.genre}>{isFetched && item[0].name}</a>
                                        )
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Movie;