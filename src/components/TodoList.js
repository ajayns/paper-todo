import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'First todo'
                },
                {
                    id: 2,
                    text: 'Second todo'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
                </ul>
            </div>
        );
    }
}

export default TodoList;
