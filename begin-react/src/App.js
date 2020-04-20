import React, { useRef, useState, useCallback, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

// 활성화된 유저의 수를 세어주는 함수(users를 파라미터로 가저온다)
function countActiveUsers(users) {
  console.log('활성화 중...')
  return users.filter(user => user.active).length;
  // user중에서 user.active 값이 true인 것들만 갯수를 가져온다
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }, [inputs]); // 함수가 현재 사용하고 있는 inputs를 deps에 넣어준다.
  /* 그렇게되면 onChange()는 inputs가 바뀔때만 바뀌게된다. 그렇지 않다면
    기존에 만들어둔 함수를 재사용 하게 된다. */

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      // ...inputs
      username,
      email,
    };
    //setUser([...users, user]);
    setUsers(users => users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id)); 
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id
      ? { ...user, active: !user.active }
      : user
    ));
  }, []);
  
  //count변수에 countActiveUsers(users)함수를 넣어주어 사용하였다
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      {/* <div>활성사용자 수 : {count}</div> */}
    </>
  );
}

export default App;
