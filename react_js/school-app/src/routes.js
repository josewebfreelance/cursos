import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './components/App';
import Home from './components/home'

const AppRoutes = () => 
<App>
    <Switch>
        <Route path="/home" component={Home}></Route>
    </Switch>
</App>

export default AppRoutes;