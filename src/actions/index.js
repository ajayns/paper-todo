// Action creators recieve data from the DOM event, format it as formal JSON 'action' object

import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from '../constants/action-types';

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    completed: false,
    text
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});