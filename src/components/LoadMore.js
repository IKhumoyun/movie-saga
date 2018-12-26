import React, {Component, Fragment} from 'react';
import jss from "jss";

const styles = {
    buttonHolder: {
        margin: 'auto',
        textAlign: 'center',
        padding: '20px 0 30px 0',
    },
    loadMore: {
        border: 'none',
        fontSize: '16px',
        padding: '10px 30px',
        fontFamily: 'Museo500',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: '#fff',
        outline: 'none',
        transition: 'all ease 0.5s',
        '&:hover': {
            background: '#fff',
            color: '#f12345',
        }
    }
};

const {classes} = jss.createStyleSheet(styles).attach();

class LoadMore extends Component {


    render() {

        const { load } = this.props;

        return (
            <div className={classes.buttonHolder}>
                <button className={classes.loadMore} onClick={load}>LOAD MORE</button>
            </div>
        );
    }
}

export default LoadMore;