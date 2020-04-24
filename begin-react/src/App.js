import React, { useRef, useReducer, useCallback, useMemo, createContext } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

// 활성화된 유저의 수를 세어주는 함수(users를 파라미터로 가저온다)
function countActiveUsers(users) {
  console.log('활성화 중...')
  return users.filter(user => user.active).length;
  // user중에서 user.active 값이 true인 것들만 갯수를 가져온다
}

const initialState = {
  users: [
    {
        id: 1,
        username: 'jiahnkim',
        email: 'kja@kakao.com',
        active: true
    },
    {
        id: 2,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: false
    },
    {
        id: 3,
        username: 'santJ',
        email: 'santJ@snow.com',
        active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
    // Immer로 구현 (immer 불변성을 지켜주는 간편하게 해주는 library. 필수항목은 아님)
      return produce(state, draft => {
        draft.users.push(action.user);
      });
      // return {
      //   users: state.users.concat(action.user)
      // };
    case 'TOGGLE_USER':
    // Immer로 구현
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active
      });
      // return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id
      //     ? { ...user, active: !user.active }
      //     : user)
      // };
    case 'REMOVE_USER':
    // Immer로 구현
    return produce(state, draft => {
      const index = draft.users.findIndex(user => user.id === action.id);
      draft.users.splice(index, 1);
    });
      // return {
      //   users: state.users.filter(user => user.id !== action.id)
      // }
    default:
      return state;
      // throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
