import React from 'react';
import styled from 'styled-components';
import { GoThreeBars } from 'react-icons/go';
// import DongChatNav from './DongChatNav';

const MenuIcon = styled.button`
  font-size: 1.5rem;
  width: 45px;
  height: 44px;
  align-items: center;
  border: none;

  display: flex;
  justify-content: center;
  margin: 30px;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    border-radius: 25px;
    background: #f7f7f7;

  }
  &:focus {
    outline: none;
  }

  cursor: pointer;
`;


const onMenuList = () => {
  return console.log('뭐하는거지....');
};

function DongChatMenu() {
  return (
    <div>
      <MenuIcon onClick={onMenuList}>
        <GoThreeBars />
      </MenuIcon>
    </div>
  );
}

export default DongChatMenu;
