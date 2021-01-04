import React from 'react';
import { gql } from 'apollo-boost';
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
  return <>{JSON.stringify(data)}</>;
};

export default WelcomeWindow;
