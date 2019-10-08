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
      <Route exact path="/" render={() => localStorage.getItem('userToken') ? <Redirect to="/app" push /> : <Redirect to="/login" push />} />
      <Route path="/app" component={App} />
      <Route exact path="/404" component={Error404} />
      <Route exact path="/login" component={Login} />
      <Route exact>
        <Redirect to="/404" />
      </Route>
    </Switch>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
