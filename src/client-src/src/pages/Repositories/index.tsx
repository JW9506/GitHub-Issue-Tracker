import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from '@emotion/styled';
import ShortcutButton from '#/components/ShortcutButton';
import * as focus from '#/store/focus';
import RepositoriesMain from './RepositoriesMain';
import NewRepositories from './NewRepositories';
import ListRepositories from './ListRepositories';
import { MessageBox } from '#/containers';
import { RepositoriesShortcut } from '#/config';

declare namespace Repositories {
  type Props = {};
  type T = typeof Repositories;
}

const KeyListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Repositories: React.FC<Repositories.Props> = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  useEffect(() => {
    dispatch(focus.add('repositoryFocus'));
    return () => {
      dispatch(focus.remove('repositoryFocus'));
    };
  }, []);
  return (
    <Container>
      <KeyListContainer>
        {RepositoriesShortcut.map((item) => (
          <ShortcutButton
            key={item.shortKey}
            shortKey={item.shortKey}
            tag={item.tag}
            dark
          />
        ))}
      </KeyListContainer>
      <MessageBox>
        <Switch>
          <Route exact path={match.path} component={RepositoriesMain} />
          <Route path={`${match.path}/new`} component={NewRepositories} />
          <Route path={`${match.path}/list`} component={ListRepositories} />
        </Switch>
      </MessageBox>
    </Container>
  );
};

export default Repositories;
