import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => dispatch(toggleTodo(id))
    }
}

const Item = styled.li`
    padding-left: 1em;
    &:before {
        content: ""
    }
`;

const Todo = ({id, text, completed, onItemClick}) => {
    return (
        <Item className="padding-small margin-small" onClick={e => onItemClick(id)}>{text}</Item>
    )
}

export default connect(null, mapDispatchToProps)(Todo);