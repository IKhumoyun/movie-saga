import React, {Component, Fragment} from 'react';
import jss from "jss";

const styles = {
    loadMore: {
        border: '1px solid #f12345',
        background: '#ffffff',
        color: '#f12345',
        outline: 'none',
        transition: 'all ease 0.5s',
        '&:hover': {
            background: '#f12345',
            color: '#fff',
        }
    }
};

const {classes} = jss.createStyleSheet(styles).attach();

class LoadMore extends Component {


    render() {

        const { load } = this.props;

        return (
            <Fragment>
                <button className={classes.loadMore} onClick={load}>LOAD MORE</button>
            </Fragment>
        );
    }
}

export default LoadMore;