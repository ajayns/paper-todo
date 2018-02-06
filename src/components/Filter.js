import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../actions';
import { FILTER_COMPLETED } from '../constants/filters';

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: (filter) => dispatch(setFilter(filter))
    }
}

const Filter = ({onChangeFilter}) => {
    return (
        <div>
            Show:
            <button onClick={e => onChangeFilter(FILTER_COMPLETED)}>Completed</button>
        </div>        
    );
}

export default connect(null, mapDispatchToProps)(Filter);

