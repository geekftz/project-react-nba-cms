import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import './index.less';
import App from './App';

import Login from '@/views/login';
import Error404 from '@/views/error404'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app" push />} />
      <Route path="/app" component={App} />
      <Route path="/404" component={Error404} />
      <Route path="/login" component={Login} />
      <Route component={Error404} />
    </Switch>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
