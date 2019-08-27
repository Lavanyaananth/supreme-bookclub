import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login'
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>  
);

export default Router;
