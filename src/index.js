import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App     from './App';
import Game    from './Game';
import TodoApp from './TodoApp';
import TodoApp2 from './TodoApp2';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App /> , document.getElementById('root'));
//ReactDOM.render(<TodoApp />, document.getElementById('todoApp'));
ReactDOM.render(<TodoApp2 />, document.getElementById('todoApp2'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
