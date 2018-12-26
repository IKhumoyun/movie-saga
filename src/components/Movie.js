import React, {Component, Fragment} from 'react';
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
    },
    movieName: {
        display: 'block',
        color: '#000',
        textDecoration: 'none',
        margin: '10px 0',
        fontFamily: 'Museo100',
    },
    movieInfo: {
        padding: 10,
    }
};

const {classes} = jss.createStyleSheet(styles).attach();

class Movie extends Component {
    render() {

        const { items, genres, isFetched } = this.props;

        return (
            <div className={`${classes.moviesHolder}`}>
                { items && items.map((item) => (
                    <Link to={`/movie/${item.id}`} >
                        <div className={`${classes.movieCard}`}>
                            <div className={`${classes.imgHolder}`}>
                                <img src={`${config.API_IMAGE.small}/${item.poster_path}`} className={`${classes.movieImg}`} alt=""/>
                            </div>
                            <div className={classes.movieInfo}>
                                <h3 className={classes.movieName}>{item.title}</h3>
                                <div className="movie-genres">
                                    {isFetched && item.genre_ids.map((id, index) => {
                                        const item = genres.filter(genre => genre.id === id);
                                        if(item.length)
                                            return (
                                                <a href="#" className="genre">{isFetched && item[0].name}</a>
                                            )
                                    })}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
}

export default Movie;