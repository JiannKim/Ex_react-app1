import React from 'react';
import styled from 'styled-components';
import { GoThreeBars } from 'react-icons/go';

const MenuIcon = styled.button`
  font-size: 1.5rem;

  display: flex;
  border: none;
  
  margin-left: 60px;
  /* background: red; */
  background: #fff;
  &:focus {
    outline: none;
  }

  cursor: pointer;
`;

const onToggle = (e) => {
  alert('아직안되!');
};

function DongChatMenu() {
  return (
    <div>
      <MenuIcon onClick={onToggle}>
          <GoThreeBars />
      </MenuIcon>
    </div>
  );
}

export default DongChatMenu;
