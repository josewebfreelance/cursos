import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Routes
import AppRoutes from './routes';

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
