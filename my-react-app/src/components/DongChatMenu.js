import React from 'react';
import styled from 'styled-components';
import { GoThreeBars } from 'react-icons/go';
import { FaAngleLeft } from 'react-icons/fa';

const MenuIcon = styled.button`
  all: unset;
  font-size: 1.5rem;
  width: 45px;
  height: 44px;
  align-items: center;

  display: flex;
  justify-content: center;
  margin: 30px;

  &:hover {
    box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.06);
    border-radius: 25px;
    background: #f1f2f5;
  }
  &:active {
    background:  #ecedf2;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.04);
  }

  cursor: pointer;
`;

const Box = styled.div`
  width: 270px;
  height: 100%;
  
  z-index: 1;
  background: #f9f9f9;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06);

  position: fixed;
  top: 0;
  flex: 0 auto;
  display: flex;
  flex-direction: column;

  /* visibility: hidden; */

  .menuHeader {
    width: 100%;
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #ecedf2;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06);

    display: flex;
    justify-content: flex-end;

    .closeIcon {
      all: unset;
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
      border-radius: 25px;

      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;

      background: #fff;
      cursor: pointer;

      &:hover {
        background: #f7f7f7;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.07);

      }
      &:active {
        background: #f4f4f4;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.04);
      }
      &:focus {
        outline: none;
      }
    }
  }
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
      <Box>
        <div className="menuHeader">
          <button className="closeIcon">
            <FaAngleLeft />
          </button>
        </div>
      </Box>
    </div>
  );
}

export default DongChatMenu;
