import React, { useState, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1 ;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {
    //reducer 사용(상태를 업데이트하는 훅 함수)
    const [number, dispatch] = useReducer(reducer, 0);
    
    const onIncrease = () => dispatch({type:'INCREMENT'});
    const onDecrease = () => dispatch({type:'DECREMENT'});
    /*
    const [number, setNumber] = useState(0);

    const onIncrease = () => setNumber(prevNumber => prevNumber + 1);
    const onDecrease = () => setNumber(prevNumber => prevNumber - 1);
    */

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>++</button>
            <button onClick={onDecrease}>--</button>
        </div>
    )
}

export default Counter;