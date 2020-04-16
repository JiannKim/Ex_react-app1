import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  };
  const [users, setUsers] = useState([
      {
          id: 1,
          username: 'jiahnkim',
          email: 'kja@kakao.com'
      },
      {
          id: 2,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
      },
      {
          id: 3,
          username: 'santJ',
          email: 'santJ@snow.com'
      }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      ...inputs,
      // username,
      // email,
    };
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
