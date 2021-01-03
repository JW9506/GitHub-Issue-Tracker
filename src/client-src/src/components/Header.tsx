import styled from '@emotion/styled';
import React from 'react';
import HeaderButton from './HeaderButton';

const HeaderContainer = styled.div`
  height: 2rem;
  background-color: #737373;
  text-align: center;
`;

declare namespace Header {
  type Props = {};
  type T = typeof Header;
}

const ShortCuts = [
  {
    tag: 'Quit',
    shortKey: 'q',
  },
  {
    tag: 'Issues',
    shortKey: 'i',
  },
  {
    tag: 'Repositories',
    shortKey: 'r',
  },
  {
    tag: 'Pull Requests',
    shortKey: 'p',
  },
];

const Header: React.FC<Header.Props> = () => {
  return (
    <HeaderContainer>
      {ShortCuts.map((item, idx) => (
        <HeaderButton tag={item.tag} shortKey={item.shortKey} key={idx} dark />
      ))}
    </HeaderContainer>
  );
};

export default Header;
