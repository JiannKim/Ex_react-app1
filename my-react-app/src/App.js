import React from "react";
import { createGlobalStyle } from "styled-components";
import ChatTemplate from "./components/ChatTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f7f7f7;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>안녕, 나는 지안이고 앞으로 나만의 앱을 만들어 볼것이야. 잘 부탁해</h1>
      <h3>나는 실시간 채팅을 할 수 있는 웹 앱을 만들어 볼거야</h3>
      <h3>그리고 간단한 회원가입도 하고, 좋아요도 누를 수 있도록 만들어 볼거야.</h3>
      <h1>동네챗</h1>
      <ChatTemplate>바로 이곳에 실시간 채팅이 채워질거야</ChatTemplate>
    </div>
  );
}

export default App;
