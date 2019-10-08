import React, { Component } from 'react';
// import { Route, Redirect, Switch } from 'react-router-dom';

import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'

class Todo {
  id = Math.random();
  @observable title;
  @observable finished = false;
  constructor(title) {
    this.title = title;
  }
}

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

@observer
class TodoListView extends Component {
  render() {
    return <div>
      <ul>
        {this.props.todoList.todos.map(todo =>
          <TodoView todo={todo} key={todo.id} />
        )}
      </ul>
      Tasks left: {this.props.todoList.unfinishedTodoCount}
      {/* <mobxDevtools.default /> */}
    </div>
  }
}

const TodoView = observer(({ todo }) =>
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => todo.finished = !todo.finished}
    />{todo.title}
  </li>
);

const sto = new TodoList();

// sto.todos.push(
//   new Todo("Get Coffee"),
//   new Todo("Write simpler code")
// );

class Routes extends Component {

  render() {
    return (
      <div>
        <h1>
          Routes
        </h1>
        <TodoListView todoList={sto} />
      </div>
    )
  }
}

export default Routes