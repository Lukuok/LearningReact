import React, { Component } from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './home/Home';
import Blog from './blog/Blog';

class MainRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/"     component={Home}/>
                    <Route exact path="/blog" component={Blog}/>
                </div>
            </Router>
        );
    }
}

export default MainRouter;