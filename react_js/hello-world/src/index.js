// Dependencies
import React from 'react';
import {render, ReactDOM} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Routes
import AppRoutes from './routes';

// Assets
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <AppRoutes/>
    </Router>, document.getElementById('root')
);
registerServiceWorker();
