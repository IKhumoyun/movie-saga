import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

class Movie extends Component {
    render() {

        const { items } = this.props;

        return (
            <div className="movies-container">
                { items && items.map((item) => (
                    <Link to={`/movie/${item.id}`}>
                        <div className="movie-item">
                            <img className="movie-img" src={`${config.API_IMAGE.small}/${item.poster_path}`} alt=""/>
                            <h3>{item.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
}

export default Movie;