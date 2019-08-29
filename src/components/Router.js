import React from 'react';  
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import app from '../App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={app}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>  
);

export default Router;
