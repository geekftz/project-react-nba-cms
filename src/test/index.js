import { observable, computed } from "mobx";

class TodoList {
  @observable todos = [];

  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

let todo = new TodoList();

todo.todos.push({
  finished: false
})

console.log(todo.unfinishedTodoCount);