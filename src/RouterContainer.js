import { Route, Switch } from 'react-router-dom'
import App from './App.js';
import React from 'react';
import NotFound from './NotFoundComponent';

const Routes = () => {
    
    return (
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="*" component={NotFound}/> 
                </Switch>
            </div> 
        )
}

export default Routes;