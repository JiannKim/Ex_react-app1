import React from 'react';

const user = React.memo(function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;

    return (
        <div>
            <b style={{
                color: active ? 'powderblue' : 'black',
                cursor: 'pointer' 
            }} onClick={() => onToggle(id)}>{username}</b> &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
            {/* 
                삭제버튼을 클릭하면 위 함수를 호출할것이고
                그 함수는 props로 받아온 onRemove를 id값을
                prameter로 넣어서 호출을 해준다
            */}
        </div>
    );
});
function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map( user => (
                    <User
                        user={user}
                        key={user.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                ))
            }
        </div>
    );
}

export default React.memo(UserList);