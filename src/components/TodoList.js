import React from 'react';

export const TodoList = ({todos, onTodoClick}) => {
    if(todos.length === 0) 
        return <div>Nothing to display.</div>

    return (
        <div>
            <ul>
                {this.state.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
            </ul>
        </div>
    );
}
