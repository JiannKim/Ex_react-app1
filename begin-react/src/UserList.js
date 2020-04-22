import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
    const { username, email, id, active } = user;
    const dispatch = useContext(UserDispatch);

    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        /** 마운트 될때 **
         * 컴포넌트가 마운트 될때 주로 하는것은
         * props로 받은 값을 component의 state로 설정
         * 외부api요청 -> REST API 요청시 component가 나타나면 특정 api 작업 처리
         * 라이브러리 사용시 -> 마운트될때 처리
         * setInterval, setTimeout 처리
         */
        return () => {
            /** 언마운트 될때 **
             * setInterval, setTimeout을 등록했던 작업을 제거할때(clearInterval, clearTimeout)
             * 라이브러리 인스턴스 제거
             * (Cleaner함수는 뒷정리 함수 같은것이다.)
             */
            console.log('컴포넌트가 화면에서 사라짐');
        }
    }, []); //비어있는 배열을 넣어준다. 이 부분을 deps라고 한다.(dependents) 의존되는 값들을 넣어준다.
    //deps가 비어있을경우 components가 처음 실행될때만 나타난다.
    return (
        <div>
            <b style={{
                color: active ? 'powderblue' : 'black',
                cursor: 'pointer' 
            }} onClick={() => dispatch({
                type: 'TOGGLE_USER',
                id
            })}>{username}</b> &nbsp;
            <span>({email})</span>
            <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
            })}>삭제</button>
            {/* 
                삭제버튼을 클릭하면 위 함수를 호출할것이고
                그 함수는 props로 받아온 onRemove를 id값을
                prameter로 넣어서 호출을 해준다
            */}
        </div>
    );
});
// 1/1 comment (04/19)
function UserList({ users }) {
    return (
        <div>
            {
                users.map( user => (
                    <User
                        user={user}
                        key={user.id}
                    />
                ))
            }
        </div>
    );
}

export default React.memo(
    UserList,
    (prevProps, nextProps) => nextProps.users === prevProps.users
);