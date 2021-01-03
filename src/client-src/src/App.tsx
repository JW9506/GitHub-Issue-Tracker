import { useEffect, useState } from 'react';
import { Http } from '#/utils/Http';
import { Main, Left, Right, Body, MessageBox } from '#/containers';
import { Header } from '#/components';
import { Text } from './containers/Text';

function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    (async () => {
      const { data: xhrData } = await Http<any>({ url: '123' });
      setData(JSON.stringify(xhrData));
    })();
  }, []);
  return (
    <Main>
      <Header />
      <Body>
        <MessageBox>
          <Text center>Welcome to Github Manager</Text>
          <Text>Name: Foobar</Text>
          <Text>Bio: C/C++ Javascript/Typescript Python Golang ~</Text>
          <Text>{data}</Text>
        </MessageBox>
      </Body>
    </Main>
  );
}

export default App;
