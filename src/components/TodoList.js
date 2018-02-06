import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from '../constants/filters';

const filteredTodos = (todos, filter) => {
    switch(filter) {
        case FILTER_ALL:
            return todos;
        case FILTER_COMPLETED:
            return todos.map(todo => todo.completed);
        case FILTER_ACTIVE:
            return todos.map(todo => !todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filteredTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => toggleTodo(id)
    }
}

const TodoList = ({todos, onTodoClick}) => {
    if(todos.length === 0) 
        return <div>Nothing to display.</div>

    return (
        <div>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
            </ul>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);