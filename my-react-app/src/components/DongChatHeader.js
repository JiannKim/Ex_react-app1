import React from 'react';
import styled from 'styled-components';
import { GoBell, GoHeart, GoOrganization, GoPerson, GoSearch } from 'react-icons/go';
import { FcLikePlaceholder, FcConferenceCall } from 'react-icons/fc';
import DongChatMenu from './DongChatMenu';

const ChatTemplateBlock = styled.div`
  width: 100%;
  height: 60px;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; //페이지 중앙 정렬
  position: relative;

  margin-top: 0;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;

  color: powderblue;
`;

const SearchWrapper = styled.div`
  width: 25%;
  height: 22px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid lightgray;
  border-radius: 11px;
  margin: 10px;
  padding: 7px;
`;

const SearchIcon = styled.div`
  position: absolute;
  /* left: 7px; */
  margin: 1px;
  left: 7px;
  color: lightgray;
`;

const SearchInput = styled.input`
  width: 86%;
  padding: 3px;
  font-size: 1rem;
  border: none;
  outline: none;
`;

const Badge = styled.div`
  width: 250px;

  font-size: 1.5rem;

//  border: 1px solid;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function DongChatHeader() {
  return (
    <>
      <ChatTemplateBlock>
        <DongChatMenu />

        <Logo>
          <h3>DongTalk</h3>
        </Logo>

        <SearchWrapper>
          <SearchIcon>
            <GoSearch className="goSearch" color="lightgray" />
          </SearchIcon>
          <SearchInput type="text" placeholder="검색할 내용을 입력해 주세요." />
        </SearchWrapper>
        
        <Badge>
          {/* Header Badge */}
          <FcLikePlaceholder/>
          {/* <FcLike /> 채워진 하트*/}
          <GoBell />
          {/* <FcConferenceCall /> 사람들 컬러 */}
          <GoOrganization />
          <GoPerson />
        </Badge>
      </ChatTemplateBlock>
    </> 
  );
}

export default DongChatHeader;
