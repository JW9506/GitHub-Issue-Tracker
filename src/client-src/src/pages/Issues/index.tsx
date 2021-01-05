import ShortcutButton from '#/components/ShortcutButton';
import { IssuesShortcut } from '#/config';
import { Left, MessageBox, Right } from '#/containers';
import styled from '@emotion/styled';
import * as focus from '#/store/focus';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import IssuesMain from './IssuesMain';
import ListIssues from './ListIssues';
import NewIssue from './NewIssue';

declare namespace Issues {
  type Props = {};
  type T = typeof Issues;
}

const KeyListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Issues: React.FC<Issues.Props> = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(focus.add('issueFocus'));
    return () => {
      dispatch(focus.remove('issueFocus'));
    };
  }, []);
  return (
    <Container>
      <KeyListContainer>
        {IssuesShortcut.map((item) => (
          <ShortcutButton
            shortKey={item.shortKey}
            tag={item.tag}
            key={item.shortKey}
            dark
          />
        ))}
      </KeyListContainer>
      <MessageBox>
        <Switch>
          <Route exact path={match.path} component={IssuesMain} />
          <Route path={`${match.path}/new`} component={NewIssue} />
          <Route path={`${match.path}/list`} component={ListIssues} />
        </Switch>
      </MessageBox>
    </Container>
  );
};

export default Issues;
