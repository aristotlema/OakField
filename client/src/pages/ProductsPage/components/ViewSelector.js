import React from 'react';

const ViewSelector = (props) => {
    return (
        <div>
            <button
                onClick={() => props.setProductView('list')}
            >
                List
            </button>
            <button
                onClick={() => props.setProductView('grid')}
            >
                Grid
            </button>
        </div>
    );
}

export default ViewSelector;