import List from '#/components/List';
import { gql } from 'apollo-boost';
import { ipcRenderer } from 'electron';
import { Text } from '#/containers';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { listIssues } from './types/listIssues';

declare namespace ListIssues {
  type Props = {};
  type T = typeof ListIssues;
}

const LIST_ISSUES = gql`
  query listIssues {
    viewer {
      issues(first: 100) {
        nodes {
          title
          url
        }
      }
    }
  }
`;

const ListIssues: React.FC<ListIssues.Props> = () => {
  const { loading, error, data } = useQuery<listIssues>(LIST_ISSUES, {
    notifyOnNetworkStatusChange: true,
    pollInterval: 0,
    fetchPolicy: 'no-cache',
  });
  const issues = data?.viewer?.issues?.nodes;
  return (
    <>
      <Text center>Issue List</Text>
      <List
        items={issues?.map((item) => item?.title)}
        onClick={(el) => {
          const link = issues?.find(
            (item) => item?.title === el.current?.innerText
          )?.url;
          link && ipcRenderer.invoke('openLink', link);
        }}
        onEnter={(idx) => {
          const link = issues?.[idx]?.url;
          link && ipcRenderer.invoke('openLink', link);
        }}
        dark
      />
    </>
  );
};

export default ListIssues;
