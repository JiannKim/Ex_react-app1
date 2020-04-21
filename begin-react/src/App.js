import React, { useRef, useReducer, useCallback, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

// 활성화된 유저의 수를 세어주는 함수(users를 파라미터로 가저온다)
function countActiveUsers(users) {
  console.log('활성화 중...')
  return users.filter(user => user.active).length;
  // user중에서 user.active 값이 true인 것들만 갯수를 가져온다
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
        id: 1,
        username: 'jiahnkim',
        email: 'kja@kakao.com',
        active: true,
    },
    {
        id: 2,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: false,
    },
    {
        id: 3,
        username: 'santJ',
        email: 'santJ@snow.com',
        active: false,
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: { //불변성을 지켜주기 위해 사용
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
          ? { ...user, active: !user.active }
          : user)
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      return state;
      // throw new Error('Unhandled action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, []);

const onCreate = useCallback(() => {
  dispatch({
    type: 'CREATE_USER',
    user: {
      id: nextId.current,
      username,
      email
    }
  });
  nextId.current += 1;
}, [username, email]);

const onToggle = useCallback(id => {
  dispatch({
    type: 'TOGGLE_USER',
    id
  });
}, []);

const onRemove = useCallback(id => {
  dispatch({
    type: 'REMOVE_USER',
    id
  })
}, [])
  
const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}
        onToggle={onToggle}
        onRemove={onRemove} 
      />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
