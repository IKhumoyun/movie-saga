import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import jss from "jss";
import preset from "jss-preset-default";
import jssExpand from 'jss-expand';
import logo from '../assets/img/logo.svg';
import search from '../assets/img/search.svg';
import {loadMovieSearch} from "../actions/movies";

jss.setup(preset(), jssExpand());

const styles = {
    navMenu: {
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    unorderedList: {
        margin: 0,
    },
    listItem: {
        display: 'inline-block',
    },
    linkItem: {
        fontFamily: 'Museo500',
        display: 'block',
        padding: 20,
        textDecoration: 'none',
        color: '#000',
        fontSize: 18,
        transition: 'all .7s ease',

        '&:hover': {
            color: '#FE6B8B',
            backgroundColor: '#eeeeee',
        }
    },
    logo: {
        position: 'relative',
        marginBottom: '-7px',
        height: '30px',
        width: 'auto',
        paddingRight: '10px',
    },
    searchBar: {
        marginRight: 60,
        display: 'flex',
    },
    searchInput: {
        fontFamily: 'Museo300',
        width: '200',
        background: 'transparent',
        outline: 'none',
        border: 'none',
        borderBottom: '2px solid #000',
        color: '#000',
        fontSize: 18,
        transition: ['all', 'ease', '0.5s'],
        '&:focus': {
            width: 300,
        }
    },
    searchButton: {
        backgroundImage: `url(${search})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        height: 30,
        width: 30,
    }
};

const {classes} = jss.createStyleSheet(styles).attach();

class Header extends Component {

    handleInputSearch = (e) => {
        const { history } = this.props;
        let value = e.target.value;
        if (value.length > 0) {
            history.push(`/search/${value}`);
        } else {
            history.push(`/`);
        }
    };

    render() {

        const { search_text } = this.props;

        return (
            <nav className={classes.navMenu}>
                <ul className={classes.unorderedList}>
                    <li className={classes.listItem}><img src={logo} alt="" className={classes.logo}/></li>
                    <li className={classes.listItem}><Link to={``} className={classes.linkItem}>Movies</Link></li>
                    <li className={classes.listItem}><Link to={``} className={classes.linkItem}>TV Seasons</Link></li>
                    <li className={classes.listItem}><Link to={``} className={classes.linkItem}>TV Episodes</Link></li>
                    <li className={classes.listItem}><Link to={``} className={classes.linkItem}>People</Link></li>
                </ul>
                <div className={classes.searchBar}>
                    <input className={classes.searchInput} type="text" placeholder="Search" onInput={this.handleInputSearch} value={search_text}/>
                    <button className={classes.searchButton} type="submit"></button>
                </div>
            </nav>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        loadMovieSearch
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        search_text: state.movies.search_text,
        isFetched: state.movies.isFetched
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));