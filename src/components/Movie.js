import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
    movieCard: {
        fontSize: 16,
        width: 260,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.5s ease',
        '&:hover': {
            boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.3)',
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
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    moviesHolder: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
};

const {classes} = jss.createStyleSheet(styles).attach();

class Movie extends Component {
    render() {

        const { items } = this.props;

        return (
            <div className={`${classes.moviesHolder}`}>
                { items && items.map((item) => (
                    <Link to={`/movie/${item.id}`} >
                        <div className={`${classes.movieCard}`}>
                            <div className={`${classes.imgHolder}`}>
                                <img src={`${config.API_IMAGE.small}/${item.poster_path}`} className={`${classes.movieImg}`} alt=""/>
                            </div>
                            <h3>{item.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
}

export default Movie;