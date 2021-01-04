import { useEffect, useState } from 'react';
import { Http } from '#/utils/Http';
import { Main, Body } from '#/containers';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Header } from '#/components';
import WelcomePage from './pages/WelcomePage';
import Issues from './pages/Issues';
import { KeyToLink } from '#/config';
import Repositories from './pages/Repositories';
import PullRequests from './pages/PullRequests';
import { useSelector } from 'react-redux';

function App() {
  const [, setData] = useState('');
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const { data: xhrData } = await Http<any>({ url: '123' });
      setData(JSON.stringify(xhrData));
    })();
  }, []);
  const { current } = useSelector((st) => st.focus);

  useEffect(() => {
    const handleNavKey = (e: KeyboardEvent) => {
      if (!KeyToLink[e.key]) {
        return;
      }
      if (
        !KeyToLink[e.key]['when'] ||
        KeyToLink[e.key]['when']!.some((item) =>
          Object.keys(current).includes(item)
        )
      ) {
        history.push(KeyToLink[e.key].link);
      }
    };
    document.addEventListener('keydown', handleNavKey);
    return () => {
      document.removeEventListener('keydown', handleNavKey);
    };
  }, [current]);

  return (
    <Main>
      <Header />
      <Body>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/issues" component={Issues} />
          <Route path="/repositories" component={Repositories} />
          <Route path="/pull-requests" component={PullRequests} />
        </Switch>
      </Body>
    </Main>
  );
}

export default App;
