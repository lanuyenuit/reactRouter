import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Something from './modules/Something'
import Home from './modules/Home'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        {/* add the routes here */}
        <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
        {/*<Route path="/about" component={About}/>*/}
        <Route path="/about" component={About}>
            <Route path="/about/:userName/:aboutName" component={Something}/>
        </Route>
    </Router>
), document.getElementById('app'))
