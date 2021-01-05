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
      <WelcomeWindow />
    </MessageBox>
  );
};

export default WelcomePage;
