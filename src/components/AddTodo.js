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
            <form 
                onSubmit={e => { 
                        e.preventDefault();
                        if(input.value.trim()) {
                            onSubmit(input.value);
                            input.value = '';
                        } 
                    }}
                className="row"
            >
                <div className="col col-sm-9 padding-right-small">
                    <input type="text" placeholder="New Todo" ref={node => { input = node }} />
                </div>
                <div className="col col-sm-3 padding-left-small">
                    <input type="submit" value="Add" className="paper-btn btn-small" />
                </div>
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(AddTodo);