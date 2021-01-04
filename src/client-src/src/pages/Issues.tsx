import { Left, Right } from '#/containers';
import React from 'react';

declare namespace Issues {
  type Props = {};
  type T = typeof Issues;
}

const Issues: React.FC<Issues.Props> = () => {
  return (
    <>
      <Left />
      <Right />
    </>
  );
};

export default Issues;
