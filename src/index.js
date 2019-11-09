import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import properties from './properties.js';

ReactDOM.render(
                <App
                    theme = ''
                    name = 'Name'
                    title = 'Title'
                    email = 'admin@segregatory24.pl'
                    telephone = '+48 583 60 50'
                    properties = {properties}
                />,
                document.getElementById('root'));
registerServiceWorker();

