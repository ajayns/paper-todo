import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => dispatch(addTodo(text))
    }
}

const AddTodo = ({onSubmit}) => {
    let input;

    return (
        <div>
            <form onSubmit={e => { onSubmit(input.value) }}>
                <input type="text" placeholder="New Todo" ref={node => {input = node}} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(AddTodo);