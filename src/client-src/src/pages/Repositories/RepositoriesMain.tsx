import Button from '#/components/Button';
import { MessageBox } from '#/containers';
import React from 'react';

declare namespace RepositoriesMain {
  type Props = {};
  type T = typeof RepositoriesMain;
}

const RepositoriesMain: React.FC<RepositoriesMain.Props> = () => {
  return (
    <>
      <MessageBox>
        <Button to="/">foo</Button>
        <Button>bar</Button>
        RepositoriesMain
      </MessageBox>
    </>
  );
};

export default RepositoriesMain;
