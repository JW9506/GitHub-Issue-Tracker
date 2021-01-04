import { MessageBox } from '#/containers';
import React from 'react';

declare namespace NewRepositories {
  type Props = {};
  type T = typeof NewRepositories;
}

const NewRepositories: React.FC<NewRepositories.Props> = () => {
  return <MessageBox>NewRepositories</MessageBox>;
};

export default NewRepositories;
