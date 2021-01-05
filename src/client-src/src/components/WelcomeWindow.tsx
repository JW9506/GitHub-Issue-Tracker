import React from 'react';
import { gql } from 'apollo-boost';
import { Text } from '#/containers';
import { useQuery } from 'react-apollo-hooks';
import { getUserInfo } from './types/getUserInfo';

const GET_USER_INFO = gql`
  query getUserInfo {
    viewer {
      name
      bio
    }
  }
`;

declare namespace WelcomeWindow {
  type Props = {};
  type T = typeof WelcomeWindow;
}

const WelcomeWindow: React.FC<WelcomeWindow.Props> = () => {
  const { loading, data } = useQuery<getUserInfo>(GET_USER_INFO, {
    notifyOnNetworkStatusChange: true,
    pollInterval: 0,
    fetchPolicy: 'no-cache',
  });
  if (loading) {
    return <>'Loading...'</>;
  }
  return (
    <>
      <Text center>Name: {data?.viewer?.name}</Text>
      <Text center>Bio: {data?.viewer?.bio}</Text>
    </>
  );
};

export default WelcomeWindow;
