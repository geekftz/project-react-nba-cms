import React, { Component } from 'react';
// import { Route, Redirect, Switch } from 'react-router-dom';


import './test.js'

class Routes extends Component {

  render() {
    return (
      <div>
        <h1>
          Routes
        </h1>
        <TodoListView todoList={store} />
      </div>
    )
  }
}

export default Routes