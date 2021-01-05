import React, { useEffect } from 'react';
import { Text } from '#/containers';
import { createNewIssue_createIssue_issue } from './types/createNewIssue';
import { ipcRenderer } from 'electron';
import { css } from '@emotion/css';

declare namespace NewIssueSuccess {
  type Props = {
    issue: createNewIssue_createIssue_issue;
  };
  type T = typeof NewIssueSuccess;
}

const NewIssueSuccess: React.FC<NewIssueSuccess.Props> = ({ issue }) => {
  const { title, url } = issue;
  const openLink = () => {
    ipcRenderer.invoke('openLink', url);
  };
  useEffect(() => {
    const handleOpenLink = (e: KeyboardEvent) => {
      if (e.key === 'o') {
        openLink();
      }
    };
    document.addEventListener('keydown', handleOpenLink);
    return () => {
      document.removeEventListener('keydown', handleOpenLink);
    };
  }, []);
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
      `}
    >
      <Text center>Create {title} success!</Text>
      <Text center>
        Go{' '}
        <span
          className={css`
            cursor: pointer;
          `}
          onClick={() => {
            openLink();
          }}
        >
          {url}
        </span>
      </Text>
      <Text center>Press 'o' to open the link.</Text>
    </div>
  );
};

export default NewIssueSuccess;
