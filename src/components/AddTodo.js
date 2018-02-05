import React from 'react';

export const AddTodo = ({onSubmit}) => {
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
