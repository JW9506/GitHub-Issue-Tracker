import Button from '#/components/Button';
import React from 'react';

declare namespace RepositoriesMain {
  type Props = {};
  type T = typeof RepositoriesMain;
}

const RepositoriesMain: React.FC<RepositoriesMain.Props> = () => {
  return (
    <>
      <Button to="/">foo</Button>
      <Button>bar</Button>
      RepositoriesMain
    </>
  );
};

export default RepositoriesMain;
