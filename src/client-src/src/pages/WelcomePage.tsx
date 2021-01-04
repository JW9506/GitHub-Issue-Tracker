import WelcomeWindow from '#/components/WelcomeWindow';
import { MessageBox, Text } from '#/containers';
import React from 'react';

declare namespace WelcomePage {
  type Props = {};
  type T = typeof WelcomePage;
}

const WelcomePage: React.FC<WelcomePage.Props> = () => {
  return (
    <MessageBox>
      <Text center>Welcome to Github Manager</Text>
      <Text>Name: Foobar</Text>
      <Text>Bio: C/C++ Javascript/Typescript Python Golang ~</Text>
      <WelcomeWindow />
    </MessageBox>
  );
};

export default WelcomePage;
