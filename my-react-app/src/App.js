import React from "react";
import { createGlobalStyle } from "styled-components";
import DongChatHeader from "./components/DongChatHeader";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f7f7f7;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <DongChatHeader />
    </div>
  );
}

export default App;
