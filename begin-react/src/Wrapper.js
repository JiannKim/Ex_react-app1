import React from 'react';
import Hello from './Hello';

function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: 15,
        margin: 10
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;