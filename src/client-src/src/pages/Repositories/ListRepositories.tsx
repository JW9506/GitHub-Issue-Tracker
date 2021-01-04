import React from 'react';
import List from '#/components/List';
import { MessageBox } from '#/containers';
import { ipcRenderer } from 'electron';
import { gql } from 'apollo-boost';
import { listRepositories } from './types/listRepositories';
import { useQuery } from 'react-apollo-hooks';

declare namespace ListRepositories {
  type Props = {};
  type T = typeof ListRepositories;
}

const LIST_REPOSITORIES = gql`
  query listRepositories {
    viewer {
      repositories(first: 100) {
        nodes {
          name
          url
        }
      }
    }
  }
`;

const ListRepositories: React.FC<ListRepositories.Props> = () => {
  const { loading, error, data } = useQuery<listRepositories>(
    LIST_REPOSITORIES,
    {
      notifyOnNetworkStatusChange: true,
      pollInterval: 0,
      fetchPolicy: 'no-cache',
    }
  );
  if (loading) {
    return <>loading...</>;
  }
  const repos = data?.viewer?.repositories?.nodes;
  return (
    <MessageBox>
      <List
        items={repos?.map((item) => item?.name)}
        onClick={(el) => {
          const link = repos?.find(
            (repo) => repo?.name === el.current?.innerText
          )?.url;
          link && ipcRenderer.invoke('openLink', link);
        }}
        onEnter={(idx) => {
          const link = repos?.[idx]?.url;
          link && ipcRenderer.invoke('openLink', link);
        }}
        dark
      />
      {/* {JSON.stringify(data?.viewer.repositories.nodes)} */}
    </MessageBox>
  );
};

export default ListRepositories;
