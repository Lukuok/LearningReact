import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App     from './App';
import Game    from './Game';
import TodoApp from './TodoApp';
import Board   from './board/BoardMain'
import TodoApp2 from './TodoApp2';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App /> , document.getElementById('root'));
//ReactDOM.render(<TodoApp />, document.getElementById('todoApp'));
//ReactDOM.render(<TodoApp2 />, document.getElementById('todoApp2'));
ReactDOM.render(<Board />, document.getElementById('board'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
