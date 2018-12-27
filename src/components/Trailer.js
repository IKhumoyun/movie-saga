import React from 'react';

class Trailer extends React.Component {

    render() {

        const { data, isFetched } = this.props;

        if(!isFetched)
            return (
                <div>Loading...</div>
            );
        return (
            <div>
                {
                    data.results.length > 0 && (<iframe width="894" height="503" src={`https://www.youtube.com/embed/${data.results.shift().key}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>)
                }
            </div>
        )
    }
}

export default Trailer;