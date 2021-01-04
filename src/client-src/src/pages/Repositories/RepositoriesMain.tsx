import Button from '#/components/Button';
import ShortcutButton from '#/components/ShortcutButton';
import { MessageBox } from '#/containers';
import styled from '@emotion/styled';
import React from 'react';

declare namespace RepositoriesMain {
  type Props = {};
  type T = typeof RepositoriesMain;
}

const KeyListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const RepositoriesMain: React.FC<RepositoriesMain.Props> = () => {
  return (
    <MessageBox>
      <KeyListContainer>
        <ShortcutButton shortKey="l" tag="List Repositories" dark />
        <ShortcutButton shortKey="c" tag="Create New Repositories" dark />
      </KeyListContainer>
      <Button to="/">
        foo
      </Button>
      <Button>
        bar
      </Button>
      RepositoriesMain
    </MessageBox>
  );
};

export default RepositoriesMain;
