import React, { Component } from 'react';
// import { Route, Redirect, Switch } from 'react-router-dom';

// import './test.js'

// class Routes extends Component {

//   render() {
//     return (
//       <div>
//         <h1>
//           Routes
//         </h1>
//         test master
//       </div>
//     )
//   }
// }

// export default Routes

import {
  observer
} from 'mobx-react'

import {
  observable,
  computed,
  autorun
} from 'mobx'

class ObservableTodoStore {
  @observable todos = [];
  @observable pendingRequests = 0;

  constructor() {
    autorun(() => console.log(this.report));
  }

  @computed get completedTodosCount() {
    return this.todos.filter(
    todo => todo.completed === true
  ).length;
  }

  @computed get report() {
      if (this.todos.length === 0)
          return "<none>";
return `Next todo: "${this.todos[0].task}". ` + 
    `Progress: ${this.completedTodosCount}/${this.todos.length}`; 
}

  addTodo(task) {
this.todos.push({ 
    task: task,
    completed: false,
    assignee: null
});
  }
}

const observableTodoStore = new ObservableTodoStore();

@observer
class TodoList extends React.Component {
  render() {
    const store = this.props.store;
    return (
      <div>
        { store.report }
        <ul>
          { store.todos.map(
            (todo, idx) => <TodoView todo={ todo } key={ idx } />
          ) }
        </ul>
        {/* { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null } */}
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
      {/* <RenderCounter /> */}
    </div>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}

@observer
class TodoView extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={ this.onRename }>
        <input
          type='checkbox'
          checked={ todo.completed }
          onChange={ this.onToggleCompleted }
        />
        { todo.task }
        { todo.assignee
          ? <small>{ todo.assignee.name }</small>
          : null
        }
      {/* <RenderCounter /> */}
    </li>
    );
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}

observableTodoStore.todos.push({ task: "task1", completed: true });
observableTodoStore.todos.push({ task: "task2", completed: true });

class Routes extends Component {

  test () {
    observableTodoStore.todos[0].completed = !observableTodoStore.todos[0].completed;
    observableTodoStore.todos[1].task = "Random todo " + Math.random();
    observableTodoStore.todos.push({ task: "Find a fine cheese", completed: true });
  }

  render() {
    return (
      <div>
        <h1>
          Routes
        </h1>
        <TodoList store={ observableTodoStore } />
        <button onClick={this.test}>test btn</button>
      </div>
    )
  }
}

export default Routes