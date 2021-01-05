import { Text } from '#/containers';
import React from 'react';

declare namespace RepositoriesMain {
  type Props = {};
  type T = typeof RepositoriesMain;
}

const RepositoriesMain: React.FC<RepositoriesMain.Props> = () => {
  return (
    <>
      <Text center>RepositoriesMain</Text>
      <Text center>Welcome</Text>
    </>
  );
};

export default RepositoriesMain;
