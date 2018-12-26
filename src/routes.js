import React, {Component} from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {Switch, Route} from 'react-router';
import {createBrowserHistory} from 'history';

import HomePage from 'containers/HomePage';
import TopNews from 'containers/TopNews';
import MovieList from 'containers/MoviesList';
import ErrorPage from 'containers/ErrorPage';
import SinglePage from 'containers/SingleMovie';

import App from "App";

const history = createBrowserHistory();

class Routes extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <App>
                    <Switch>
                        <Route exact path={HomePage.path} component={HomePage}/>
                        <Route exact path={TopNews.path} component={TopNews}/>
                        <Route exact path={MovieList.path} component={MovieList}/>
                        <Route exact path={SinglePage.path} component={SinglePage}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                </App>
            </ConnectedRouter>
        );
    }
}


export default Routes;