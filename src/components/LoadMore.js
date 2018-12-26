import React, {Component} from 'react';

class LoadMore extends Component {


    render() {

        const { load } = this.props;

        return (
            <div>
                <button onClick={load}>LOAD MORE</button>
            </div>
        );
    }
}

export default LoadMore;