import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { Text } from '#/containers';
import { createNewRepository_createRepository_repository } from './types/createNewRepository';
import { css } from '@emotion/css';
import { ipcRenderer } from 'electron';

declare namespace NewRepositoriesSuccess {
  type Props = {
    repository: createNewRepository_createRepository_repository;
  };
  type T = typeof NewRepositoriesSuccess;
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewRepositoriesSuccess: React.FC<NewRepositoriesSuccess.Props> = ({
  repository,
}) => {
  // const { name, url } = repository;
  const name = 'Foobar-Repo';
  const url = 'http://www.google.com';
  const fieldStyle = css`
    text-decoration: underline;
    cursor: pointer;
  `;
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
    <Container>
      <Text center>
        Creation <span className={fieldStyle}>{name}</span> success
      </Text>
      <Text center>
        Go{' '}
        <span className={fieldStyle} onClick={openLink}>
          {url}
        </span>
      </Text>
      <Text center>Press 'o' to open the link.</Text>
    </Container>
  );
};

export default NewRepositoriesSuccess;
