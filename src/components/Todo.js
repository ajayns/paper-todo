import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
    padding-left: 1em;
    &:before {
        content: ""
    }
`;

const Todo = ({text}) => {
    return (
        <Item className="padding-small margin-small">{text}</Item>
    )
}

export default Todo;