import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { //state무조건 객체여야 함.
            counter: 0
        };
    }
    handleIncrease = () => {
        // this.setState({counter: this.state.counter + 1});
        //함수형(여러번 처리해줘야 하는 작업이 있을때 함수형을 사용)
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));
        console.log('ic');      
    }       //3씩 +됨.

    handleDecrease = () => {
        this.setState({counter: this.state.counter - 1});
        console.log('dc');
    }
    render() {
        return (
            <div>
                <h1 >{this.state.counter}</h1>
                <button onClick={this.handleIncrease} >+1</button>
                <button onClick={this.handleDecrease} >-1</button>
            </div>
        );
    };
} ;

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1 ;
//         default:
//             throw new Error('Unhandled action');
//     }
// }

// function Counter() {
//     //reducer 사용(상태를 업데이트하는 훅 함수)
//     const [number, dispatch] = useReducer(reducer, 0);
    
//     const onIncrease = () => dispatch({type:'INCREMENT'});
//     const onDecrease = () => dispatch({type:'DECREMENT'});
//     /*
//     const [number, setNumber] = useState(0);

//     const onIncrease = () => setNumber(prevNumber => prevNumber + 1);
//     const onDecrease = () => setNumber(prevNumber => prevNumber - 1);
//     */

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>++</button>
//             <button onClick={onDecrease}>--</button>
//         </div>
//     )
// }

export default Counter;