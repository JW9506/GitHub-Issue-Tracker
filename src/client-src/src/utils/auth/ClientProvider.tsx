import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ipcRenderer } from 'electron';
import { ApolloProvider } from '@apollo/react-hooks';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

export const ClientProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const access_token = await ipcRenderer.invoke('getCode');
        setToken(access_token);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const client = new ApolloClient({
    uri: GITHUB_BASE_URL,
    request: (operation) => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    },
  });
  return <div>{children}</div>;
};
