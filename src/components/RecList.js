import React, {Component} from 'react';
import Movie from "./Movie";

class RecList extends Component {
    render() {

        const { items, genres, isFetched } = this.props;

        return (
            <Movie items={items} genres={genres} isFetched={isFetched}/>
        );
    }
}

export default RecList;