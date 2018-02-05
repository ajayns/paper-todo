import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="New Todo"/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

export default AddTodo;
