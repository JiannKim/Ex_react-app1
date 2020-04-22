//Hook함수 만들어 사용해보기
import { useCallback, useReducer } from 'react';

//useReducer사용하여 구현해보기(숙제)
function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.name]: action.value
                /*
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
                */
            };
        case 'RESET': 
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
            // return {
            //     username:'',
            //     email:''
            // };
        default:
            return state;
    } 
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
    }, []);
    
    const reset = useCallback(() => {
        dispatch({type: 'RESET'});
    }, []);

    return [
        form, onChange, reset
    ];
}

export default useInputs;
// --------------------------------------------

// import { useReducer, useCallback } from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE':
//       return {
//         ...state,
//         [action.name]: action.value
//       };
//     case 'RESET':
//       return Object.keys(state).reduce((acc, current) => {
//         acc[current] = '';
//         return acc;
//       }, {});
//     default:
//       return state;
//   }
// }

// function useInputs(initialForm) {
//   const [form, dispatch] = useReducer(reducer, initialForm);
//   // change
//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({ type: 'CHANGE', name, value });
//   }, []);
//   const reset = useCallback(() => dispatch({ type: 'RESET' }), []);
//   return [form, onChange, reset];
// }

// export default useInputs;