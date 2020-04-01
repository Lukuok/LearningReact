import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from './components/MainRouter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainRouter /> , document.getElementById('fh5co-page'));

serviceWorker.unregister();
