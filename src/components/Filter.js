import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div>
                Show:
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        );
    }
}

export default Filter;
