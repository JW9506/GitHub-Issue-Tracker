import styled from '@emotion/styled';
import React, { memo } from 'react';
import ShortutButton from './ShortcutButton';
import { KeyToLink, Shortcuts } from '#/config';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderContainer = styled.div`
  height: 2rem;
  background-color: #737373;
  text-align: center;
`;

declare namespace Header {
  type Props = {};
  type T = typeof Header;
}

const Header: React.FC<Header.Props> = memo(() => {
  const state = useSelector((st) => st)
  const history = useHistory();
  return (
    <HeaderContainer>
      {Shortcuts.map((item, idx) => (
        <ShortutButton
          tag={item.tag}
          shortKey={item.shortKey}
          key={idx}
          dark
          onClick={() => {
            history.push(KeyToLink[item.shortKey].link);
          }}
        />
      ))}
      <div>{JSON.stringify(state)}</div>
    </HeaderContainer>
  );
});

export default Header;
