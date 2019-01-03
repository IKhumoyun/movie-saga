import React, {Component} from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {Switch, Route} from 'react-router';
import {createBrowserHistory} from 'history';

import MovieList from 'containers/MainPage';
import ErrorPage from 'containers/ErrorPage';
import SinglePage from 'containers/SingleMovie';
import SearchList from "containers/SearchList";

import App from "App";


const history = createBrowserHistory();

class Routes extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <App>
                    <Switch>
                        <Route exact path={MovieList.path} component={MovieList}/>
                        <Route exact path={SinglePage.path} component={SinglePage}/>
                        <Route exact path={SearchList.path} component={SearchList}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                </App>
            </ConnectedRouter>
        );
    }
}


export default Routes;