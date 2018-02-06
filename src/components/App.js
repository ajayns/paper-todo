import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
      </div>      
    );
  }
}

export default App;
