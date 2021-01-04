import { useSelector, useStore, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  Link,
} from 'react-router-dom';
import * as focus from '#/store/focus';
import RepositoriesMain from './RepositoriesMain';

declare namespace Repositories {
  type Props = {};
  type T = typeof Repositories;
}

const NewRepo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(focus.add('repositoryFocus'));
    return () => {
      dispatch(focus.remove('repositoryFocus'));
    };
  }, []);
  return <> New Repositories</>;
};
const ListRepo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(focus.add('repositoryFocus'));
    return () => {
      dispatch(focus.remove('repositoryFocus'));
    };
  }, []);
  return <> List Repositories</>;
};

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
    <Switch>
      <Route exact path={match.path} component={RepositoriesMain} />
      <Route path={`${match.path}/new`} component={NewRepo} />
      <Route path={`${match.path}/list`} component={ListRepo} />
    </Switch>
  );
};

export default Repositories;
