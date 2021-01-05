import React from 'react';
import { Text } from '#/containers';

declare namespace IssuesMain {
  type Props = {};
  type T = typeof IssuesMain;
}

const IssuesMain: React.FC<IssuesMain.Props> = () => {
  return (
    <>
      <Text center>IssuesMain</Text>
      <Text center>Welcome</Text>
    </>
  );
};

export default IssuesMain;
