import React from 'react';
import { connect } from 'react-redux'

const Filter = () => {
    return (
        <div>
            Show:
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}

export default Filter;

