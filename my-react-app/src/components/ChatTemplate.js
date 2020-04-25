import React from 'react';
import styled from 'styled-components';

const ChatTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative; //박스 하단에 버튼 위치시키기 위한
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 70px; //페이지 중앙 정렬

    margin-top: 80px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
`;

function ChatTemplate({ children }) {
  return ( 
    <ChatTemplateBlock>{children}</ChatTemplateBlock>
  );
}

export default ChatTemplate;
